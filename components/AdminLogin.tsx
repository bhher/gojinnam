import React, { useState } from 'react';
import { LogIn, Lock, User, AlertCircle } from 'lucide-react';

interface AdminLoginProps {
  onLogin: () => void;
  onBack: () => void;
}

export const AdminLogin: React.FC<AdminLoginProps> = ({ onLogin, onBack }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    // 간단한 딜레이로 로딩 효과
    setTimeout(() => {
      if (username === 'admin' && password === 'admin123') {
        setLoading(false);
        onLogin();
      } else {
        setLoading(false);
        setError('아이디 또는 비밀번호가 올바르지 않습니다.');
      }
    }, 500);
  };

  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center pt-24 pb-32 px-6">
      <div className="w-full max-w-md">
        <div className="bg-[#111] rounded-lg border border-gray-800 p-8">
          {/* Header */}
          <div className="text-center mb-8">
            <div className="w-16 h-16 bg-[#d4af37] rounded-full flex items-center justify-center mx-auto mb-4">
              <Lock size={32} className="text-black" />
            </div>
            <h1 className="text-3xl font-bold mb-2">어드민 로그인</h1>
            <p className="text-gray-400 text-sm">관리자 페이지에 접근하려면 로그인하세요</p>
          </div>

          {/* Login Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Username */}
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                아이디
              </label>
              <div className="relative">
                <div className="absolute left-4 top-1/2 transform -translate-y-1/2">
                  <User size={20} className="text-gray-500" />
                </div>
                <input
                  type="text"
                  value={username}
                  onChange={(e) => {
                    setUsername(e.target.value);
                    setError('');
                  }}
                  placeholder="아이디를 입력하세요"
                  className="w-full bg-black/50 border border-gray-700 rounded-lg pl-12 pr-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-[#d4af37] transition-colors"
                  required
                  autoFocus
                />
              </div>
            </div>

            {/* Password */}
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                비밀번호
              </label>
              <div className="relative">
                <div className="absolute left-4 top-1/2 transform -translate-y-1/2">
                  <Lock size={20} className="text-gray-500" />
                </div>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                    setError('');
                  }}
                  placeholder="비밀번호를 입력하세요"
                  className="w-full bg-black/50 border border-gray-700 rounded-lg pl-12 pr-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-[#d4af37] transition-colors"
                  required
                  onKeyPress={(e) => e.key === 'Enter' && handleSubmit(e)}
                />
              </div>
            </div>

            {/* Error Message */}
            {error && (
              <div className="flex items-center gap-2 p-3 bg-red-500/10 border border-red-500/30 rounded-lg text-red-400 text-sm">
                <AlertCircle size={18} />
                <span>{error}</span>
              </div>
            )}

            {/* Submit Button */}
            <button
              type="submit"
              disabled={loading || !username || !password}
              className="w-full bg-[#d4af37] hover:bg-white hover:text-black text-black font-bold py-3 rounded-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              {loading ? (
                <>
                  <div className="w-5 h-5 border-2 border-black border-t-transparent rounded-full animate-spin"></div>
                  <span>로그인 중...</span>
                </>
              ) : (
                <>
                  <LogIn size={20} />
                  <span>로그인</span>
                </>
              )}
            </button>
          </form>

          {/* Back Button */}
          <button
            onClick={onBack}
            className="w-full mt-4 text-gray-400 hover:text-white text-sm transition-colors"
          >
            ← 메인으로 돌아가기
          </button>
        </div>
      </div>
    </div>
  );
};

