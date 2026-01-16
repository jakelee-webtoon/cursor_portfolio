'use client';

export default function FlowDiagram() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-700 to-blue-900 text-white p-6 rounded-t-2xl shadow-lg">
          <h1 className="text-3xl font-bold text-center">
            JP Character Chat Log Design & <span className="text-green-300">Review Process</span>
          </h1>
        </div>

        {/* Main Flow */}
        <div className="bg-white p-8 shadow-xl rounded-b-2xl">
          
          {/* Top Flow Bar */}
          <div className="flex items-center justify-between mb-8 bg-gradient-to-r from-blue-500 to-blue-600 p-4 rounded-xl text-white">
            <div className="flex items-center gap-4">
              <div className="bg-white/20 p-3 rounded-lg">
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" />
                </svg>
              </div>
              <span className="font-semibold">NW DATA (W DATA)</span>
            </div>
            <div className="flex items-center gap-6 text-sm">
              <span className="bg-white/20 px-4 py-2 rounded-lg">Planning</span>
              <span className="text-2xl">→</span>
              <span className="bg-white/20 px-4 py-2 rounded-lg">Primary Log Review</span>
              <span className="text-2xl">→</span>
              <span className="bg-white/20 px-4 py-2 rounded-lg">Development / Integration</span>
            </div>
          </div>

          {/* Process Flow */}
          <div className="grid grid-cols-5 gap-6 mb-8">
            
            {/* NW DATA Box */}
            <div className="bg-blue-50 border-2 border-blue-200 rounded-xl p-6">
              <div className="flex items-center gap-2 mb-4">
                <svg className="w-6 h-6 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" />
                </svg>
                <h3 className="font-bold text-blue-900">NW DATA</h3>
              </div>
              <div className="text-sm space-y-2 text-blue-800">
                <div>• WTQ Platform Provision</div>
                <div>• Log/Metric Framework & Guidelines</div>
                <div>• Limited Advisory Support</div>
              </div>
            </div>

            {/* Planning - Kaho Sato */}
            <div className="bg-orange-50 border-2 border-orange-300 rounded-xl p-6 relative">
              <div className="absolute -left-3 top-1/2 transform -translate-y-1/2 text-blue-500 text-4xl">→</div>
              <div className="text-center mb-3">
                <div className="w-16 h-16 bg-orange-200 rounded-full mx-auto mb-2 flex items-center justify-center">
                  <svg className="w-8 h-8 text-orange-700" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="font-bold text-orange-900">Kaho Sato</h3>
                <p className="text-xs text-orange-700">(LDF Planning)</p>
              </div>
              <div className="text-xs space-y-1 text-orange-800">
                <div>• Metric Definition</div>
                <div>• Log Specification Draft</div>
                <div>• WTQ Registration</div>
              </div>
            </div>

            {/* Primary Review - LDF DS */}
            <div className="bg-teal-50 border-2 border-teal-400 rounded-xl p-6 relative">
              <div className="absolute -left-3 top-1/2 transform -translate-y-1/2 text-blue-500 text-4xl">→</div>
              <div className="text-center mb-3">
                <div className="w-16 h-16 bg-teal-200 rounded-full mx-auto mb-2 flex items-center justify-center">
                  <svg className="w-8 h-8 text-teal-700" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="font-bold text-teal-900">LDF Data Science (JP)</h3>
              </div>
              <div className="text-xs space-y-1 text-teal-800">
                <div>• Field Definition Review</div>
                <div>• Content Type Validation</div>
                <div>• Analytics Readiness Check</div>
              </div>
              <div className="mt-3 bg-teal-600 text-white text-xs p-2 rounded-lg text-center font-bold">
                🎯 Primary Responsibility
              </div>
            </div>

            {/* Development */}
            <div className="bg-purple-50 border-2 border-purple-300 rounded-xl p-6 relative">
              <div className="absolute -left-3 top-1/2 transform -translate-y-1/2 text-blue-500 text-4xl">→</div>
              <div className="text-center mb-3">
                <div className="w-16 h-16 bg-purple-200 rounded-full mx-auto mb-2 flex items-center justify-center">
                  <svg className="w-8 h-8 text-purple-700" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="font-bold text-purple-900">NW FE / BE</h3>
                <h3 className="font-bold text-purple-900">& LM APP TECH</h3>
              </div>
              <div className="text-xs space-y-1 text-purple-800">
                <div>• Implement Logs</div>
                <div>• Log Calling & Integration</div>
              </div>
            </div>

            {/* QA */}
            <div className="bg-pink-50 border-2 border-pink-300 rounded-xl p-6 relative">
              <div className="absolute -left-3 top-1/2 transform -translate-y-1/2 text-blue-500 text-4xl">→</div>
              <div className="text-center mb-3">
                <div className="w-16 h-16 bg-pink-200 rounded-full mx-auto mb-2 flex items-center justify-center">
                  <svg className="w-8 h-8 text-pink-700" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
                    <path fillRule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm9.707 5.707a1 1 0 00-1.414-1.414L9 12.586l-1.293-1.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="font-bold text-pink-900">LDF QA Team</h3>
              </div>
              <div className="text-xs space-y-1 text-pink-800">
                <div>• Verify Correctness</div>
              </div>
            </div>
          </div>

          {/* Issue Classification */}
          <div className="grid grid-cols-2 gap-6 mt-8">
            {/* Log Design Issues */}
            <div className="bg-red-50 border-2 border-red-300 rounded-xl p-6">
              <h3 className="text-lg font-bold text-red-900 mb-3 flex items-center gap-2">
                <span className="text-2xl">🔴</span>
                Log Design Issues
              </h3>
              <div className="space-y-2 text-sm text-red-800 mb-4">
                <div>• Field Errors / Omissions</div>
                <div>• Incorrect Content Definition</div>
                <div>• Not Suitable for Analysis</div>
              </div>
              <div className="bg-red-600 text-white p-3 rounded-lg font-bold text-center">
                Primary Responsibility:<br/>LDF Data Science
              </div>
            </div>

            {/* Technical Integration Issues */}
            <div className="bg-orange-50 border-2 border-orange-300 rounded-xl p-6">
              <h3 className="text-lg font-bold text-orange-900 mb-3 flex items-center gap-2">
                <span className="text-2xl">🟠</span>
                Technical Integration Issues
              </h3>
              <div className="space-y-2 text-sm text-orange-800 mb-4">
                <div>• CORS / UA Problems</div>
                <div>• Domain Access Errors</div>
                <div>• WebView / Deployment Issues</div>
              </div>
              <div className="bg-orange-600 text-white p-3 rounded-lg font-bold text-center">
                Technical Responsibility:<br/>NW FE / BE Development
              </div>
            </div>
          </div>

          {/* Bottom NW DATA Support Box */}
          <div className="mt-6 bg-blue-50 border-2 border-blue-200 rounded-xl p-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <svg className="w-8 h-8 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" />
                </svg>
                <div>
                  <h3 className="font-bold text-blue-900">NW DATA (W DATA)</h3>
                  <p className="text-sm text-blue-700">Limited Advisory Support</p>
                </div>
              </div>
              <div className="text-sm space-y-1 text-blue-800">
                <div>• WTQ Platform Provision</div>
                <div>• Log/Metric Framework & Guidelines</div>
                <div className="flex items-center gap-2 text-blue-600 font-semibold">
                  <span className="text-xl">⚠️</span>
                  No ownership of log content validation
                </div>
              </div>
            </div>
          </div>

          {/* Key Principles */}
          <div className="mt-8 grid grid-cols-3 gap-4">
            <div className="bg-green-50 border border-green-300 rounded-lg p-4">
              <h4 className="font-bold text-green-900 mb-2">✅ 권장 방식</h4>
              <div className="text-sm text-green-800 space-y-1">
                <div>• Kaho ↔ 개발 직접 소통</div>
                <div>• Kaho ↔ DS ↔ 개발</div>
                <div>• DS 해결 불가시만 W Data 지원</div>
              </div>
            </div>
            <div className="bg-red-50 border border-red-300 rounded-lg p-4">
              <h4 className="font-bold text-red-900 mb-2">🚫 하지 않는 것</h4>
              <div className="text-sm text-red-800 space-y-1">
                <div>• W Data의 JP 로그 검수</div>
                <div>• DM 기반 개인 대응</div>
                <div>• Black Box 형식 처리</div>
              </div>
            </div>
            <div className="bg-blue-50 border border-blue-300 rounded-lg p-4">
              <h4 className="font-bold text-blue-900 mb-2">🎯 핵심 원칙</h4>
              <div className="text-sm text-blue-800 space-y-1">
                <div>• 로그 = 분석 자산</div>
                <div>• 검수 책임: Data Science</div>
                <div>• W Data = 프레임 제공자</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
