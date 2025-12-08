import React, { useState, useEffect } from 'react';
import { collection, getDocs, query, orderBy, deleteDoc, doc } from 'firebase/firestore';
import { db } from '../services/firebase';
import { ArrowLeft, Trash2, RefreshCw, Loader2, User, Phone, Calendar, LogOut } from 'lucide-react';

interface Contact {
  id: string;
  name: string;
  contact: string;
  createdAt: string;
  timestamp?: any;
}

export const AdminDashboard: React.FC<{ onBack: () => void }> = ({ onBack }) => {
  const [contacts, setContacts] = useState<Contact[]>([]);
  const [loading, setLoading] = useState(true);
  const [deleting, setDeleting] = useState<string | null>(null);

  const fetchContacts = async () => {
    setLoading(true);
    try {
      const q = query(collection(db, 'contacts'), orderBy('timestamp', 'desc'));
      const querySnapshot = await getDocs(q);
      const contactsData: Contact[] = [];
      
      querySnapshot.forEach((doc) => {
        contactsData.push({
          id: doc.id,
          ...doc.data()
        } as Contact);
      });
      
      setContacts(contactsData);
    } catch (error) {
      console.error('연락처 불러오기 오류:', error);
      alert('데이터를 불러오는 중 오류가 발생했습니다.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchContacts();
  }, []);

  const handleDelete = async (id: string) => {
    if (!confirm('정말 삭제하시겠습니까?')) return;

    setDeleting(id);
    try {
      await deleteDoc(doc(db, 'contacts', id));
      setContacts(contacts.filter(contact => contact.id !== id));
    } catch (error) {
      console.error('삭제 오류:', error);
      alert('삭제 중 오류가 발생했습니다.');
    } finally {
      setDeleting(null);
    }
  };

  const formatDate = (dateString: string) => {
    try {
      const date = new Date(dateString);
      return date.toLocaleString('ko-KR', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit'
      });
    } catch {
      return dateString;
    }
  };

  return (
    <div className="min-h-screen bg-black text-white pt-24 pb-32">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <div className="flex items-center gap-4">
            <button
              onClick={onBack}
              className="p-2 hover:bg-white/10 rounded transition-colors"
            >
              <ArrowLeft size={24} />
            </button>
            <h1 className="text-4xl font-bold">어드민 대시보드</h1>
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={fetchContacts}
              disabled={loading}
              className="flex items-center gap-2 px-4 py-2 bg-[#d4af37] hover:bg-white text-black font-bold transition-all disabled:opacity-50"
            >
              {loading ? (
                <Loader2 size={18} className="animate-spin" />
              ) : (
                <RefreshCw size={18} />
              )}
              새로고침
            </button>
            <button
              onClick={onBack}
              className="flex items-center gap-2 px-4 py-2 bg-red-600 hover:bg-red-700 text-white font-bold transition-all"
            >
              <LogOut size={18} />
              로그아웃
            </button>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-[#111] p-6 rounded-lg border border-gray-800">
            <div className="flex items-center gap-3 mb-2">
              <User className="text-[#d4af37]" size={24} />
              <h3 className="text-gray-400 text-sm uppercase">전체 문의</h3>
            </div>
            <p className="text-3xl font-bold">{contacts.length}건</p>
          </div>
          <div className="bg-[#111] p-6 rounded-lg border border-gray-800">
            <div className="flex items-center gap-3 mb-2">
              <Calendar className="text-[#d4af37]" size={24} />
              <h3 className="text-gray-400 text-sm uppercase">오늘 문의</h3>
            </div>
            <p className="text-3xl font-bold">
              {contacts.filter(contact => {
                const date = new Date(contact.createdAt);
                const today = new Date();
                return date.toDateString() === today.toDateString();
              }).length}건
            </p>
          </div>
          <div className="bg-[#111] p-6 rounded-lg border border-gray-800">
            <div className="flex items-center gap-3 mb-2">
              <Phone className="text-[#d4af37]" size={24} />
              <h3 className="text-gray-400 text-sm uppercase">이번 주 문의</h3>
            </div>
            <p className="text-3xl font-bold">
              {contacts.filter(contact => {
                const date = new Date(contact.createdAt);
                const weekAgo = new Date();
                weekAgo.setDate(weekAgo.getDate() - 7);
                return date >= weekAgo;
              }).length}건
            </p>
          </div>
        </div>

        {/* Contacts Table */}
        <div className="bg-[#111] rounded-lg border border-gray-800 overflow-hidden">
          <div className="p-6 border-b border-gray-800">
            <h2 className="text-xl font-bold">연락처 목록</h2>
          </div>

          {loading ? (
            <div className="flex justify-center items-center py-20">
              <Loader2 size={48} className="animate-spin text-[#d4af37]" />
            </div>
          ) : contacts.length === 0 ? (
            <div className="text-center py-20 text-gray-400">
              <User size={64} className="mx-auto mb-4 opacity-50" />
              <p className="text-lg">저장된 연락처가 없습니다.</p>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-black/50">
                  <tr>
                    <th className="px-6 py-4 text-left text-sm font-bold uppercase text-[#d4af37]">번호</th>
                    <th className="px-6 py-4 text-left text-sm font-bold uppercase text-[#d4af37]">성함</th>
                    <th className="px-6 py-4 text-left text-sm font-bold uppercase text-[#d4af37]">연락처</th>
                    <th className="px-6 py-4 text-left text-sm font-bold uppercase text-[#d4af37]">등록일시</th>
                    <th className="px-6 py-4 text-center text-sm font-bold uppercase text-[#d4af37]">작업</th>
                  </tr>
                </thead>
                <tbody>
                  {contacts.map((contact, index) => (
                    <tr
                      key={contact.id}
                      className="border-t border-gray-800 hover:bg-white/5 transition-colors"
                    >
                      <td className="px-6 py-4 text-gray-300">{contacts.length - index}</td>
                      <td className="px-6 py-4 font-medium">{contact.name}</td>
                      <td className="px-6 py-4 text-gray-300">{contact.contact}</td>
                      <td className="px-6 py-4 text-gray-400 text-sm">
                        {formatDate(contact.createdAt)}
                      </td>
                      <td className="px-6 py-4 text-center">
                        <button
                          onClick={() => handleDelete(contact.id)}
                          disabled={deleting === contact.id}
                          className="p-2 hover:bg-red-500/20 text-red-400 hover:text-red-300 rounded transition-colors disabled:opacity-50"
                        >
                          {deleting === contact.id ? (
                            <Loader2 size={18} className="animate-spin" />
                          ) : (
                            <Trash2 size={18} />
                          )}
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

