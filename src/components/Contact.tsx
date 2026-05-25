"use client";

import { useState } from "react";
import { Mail, Send, Sparkles } from "lucide-react";
import { developerData } from "@/constants/data";

export default function Contact() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState<boolean | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitSuccess(null);
    setErrorMessage(null);
    
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formState),
      });

      const data = await response.json();

      if (response.ok) {
        setSubmitSuccess(true);
        setFormState({ name: "", email: "", subject: "", message: "" });
        // Reset success status after a few seconds
        setTimeout(() => setSubmitSuccess(null), 5000);
      } else {
        setErrorMessage(data.error || "Có lỗi xảy ra. Vui lòng thử lại sau.");
      }
    } catch (error) {
      setErrorMessage("Không thể kết nối với cơ sở dữ liệu. Vui lòng kiểm tra lại đường truyền mạng.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-transparent border-t border-slate-200 dark:border-zinc-900 transition-colors duration-300">
      {/* Background neon glows */}
      <div 
        className="absolute top-1/4 right-0 w-80 h-80 bg-cyan-500/5 rounded-full blur-[100px] pointer-events-none"
        aria-hidden="true"
      />
      <div 
        className="absolute bottom-0 left-10 w-64 h-64 bg-emerald-500/5 rounded-full blur-[90px] pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-mono text-cyan-600 dark:text-cyan-400 uppercase tracking-widest block">
            Liên hệ với tôi
          </span>
          <h2 className="font-sans font-extrabold text-3xl sm:text-4xl text-zinc-900 dark:text-white tracking-tight transition-colors">
            Hãy cùng hợp tác
          </h2>
          <p className="text-zinc-600 dark:text-zinc-400 text-sm leading-relaxed max-w-xl mx-auto transition-colors">
            Bạn đang cần xây dựng một ứng dụng web hoặc cần một giải pháp công nghệ cho dự án của mình? Hãy liên hệ ngay để chúng ta cùng trao đổi.
          </p>
        </div>

        {/* Contact Content Panel */}
        <div className="bg-white/80 dark:bg-zinc-900/30 rounded-3xl p-8 md:p-12 border border-slate-200 dark:border-zinc-900 shadow-lg dark:shadow-2xl relative overflow-hidden transition-all">
          <div className="grid md:grid-cols-12 gap-12 items-start relative z-10">
            
            {/* Left: Contact Info */}
            <div className="md:col-span-5 space-y-8">
              <div>
                <h3 className="font-sans font-bold text-xl text-zinc-900 dark:text-white mb-3 transition-colors">
                  Thông tin liên hệ
                </h3>
                <p className="text-zinc-600 dark:text-zinc-400 text-sm leading-relaxed font-light transition-colors">
                  Tôi luôn sẵn lòng phản hồi các tin nhắn, yêu cầu phỏng vấn, hoặc các thảo luận kỹ thuật.
                </p>
              </div>

              {/* Social Channels list */}
              <div className="flex flex-col gap-4">
                <a
                  href={`mailto:${developerData.email}`}
                  className="group flex items-center gap-4 text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors"
                >
                  <div className="w-10 h-10 rounded-xl bg-slate-100 dark:bg-zinc-950 border border-slate-200 dark:border-zinc-900 flex items-center justify-center group-hover:bg-cyan-50/50 group-hover:text-cyan-600 dark:group-hover:bg-cyan-950/20 dark:group-hover:text-cyan-400 group-hover:border-cyan-500/30 transition-all shrink-0">
                    <Mail className="w-4.5 h-4.5 text-zinc-500 group-hover:text-cyan-600 dark:text-zinc-450 dark:group-hover:text-cyan-400 transition-colors" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[10px] text-zinc-500 dark:text-zinc-450 font-mono uppercase tracking-wider transition-colors">Hòm thư trực tiếp</span>
                    <span className="text-sm font-semibold transition-colors">{developerData.email}</span>
                  </div>
                </a>

                <a
                  href={developerData.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-4 text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors"
                >
                  <div className="w-10 h-10 rounded-xl bg-slate-100 dark:bg-zinc-950 border border-slate-200 dark:border-zinc-900 flex items-center justify-center group-hover:bg-cyan-50/50 group-hover:text-cyan-600 dark:group-hover:bg-cyan-950/20 dark:group-hover:text-cyan-400 group-hover:border-cyan-500/30 transition-all shrink-0">
                    <svg className="w-4.5 h-4.5 fill-current text-zinc-500 group-hover:text-cyan-600 dark:text-zinc-450 dark:group-hover:text-cyan-400 transition-colors" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.76-1.604-2.665-.3-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.24 2.874.118 3.176.77.84 1.235 1.91 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[10px] text-zinc-500 dark:text-zinc-450 font-mono uppercase tracking-wider transition-colors">Kho lưu trữ mã nguồn</span>
                    <span className="text-sm font-semibold transition-colors">github.com/NXDuyThang</span>
                  </div>
                </a>
              </div>

              {/* Strict system check warning tag */}
              <div className="p-4 rounded-xl border border-slate-200 dark:border-zinc-900 bg-slate-100/80 dark:bg-zinc-950/50 text-[10px] font-mono text-zinc-600 dark:text-zinc-500 flex items-center gap-2 transition-colors">
                <Sparkles className="w-4 h-4 text-cyan-600 dark:text-cyan-400 animate-pulse shrink-0" />
                <span>Tất cả tin nhắn gửi qua hệ thống đều được tự động lưu vết và phản hồi sớm nhất trong vòng 24 giờ.</span>
              </div>
            </div>

            {/* Right: Contact Form */}
            <div className="md:col-span-7">
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-xs font-mono text-zinc-500 dark:text-zinc-400 uppercase mb-2 transition-colors">
                      Họ và tên <span className="text-cyan-600 dark:text-cyan-400">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formState.name}
                      onChange={handleChange}
                      placeholder="Nguyễn Văn A"
                      required
                      className="w-full bg-slate-50 dark:bg-zinc-950 border border-slate-200 dark:border-zinc-800 text-zinc-900 dark:text-white text-sm rounded-xl px-4 py-3 placeholder-zinc-400 dark:placeholder-zinc-700 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500/30 transition-all font-sans"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-xs font-mono text-zinc-500 dark:text-zinc-400 uppercase mb-2 transition-colors">
                      Địa chỉ Email <span className="text-cyan-600 dark:text-cyan-400">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formState.email}
                      onChange={handleChange}
                      placeholder="email@congty.com"
                      required
                      className="w-full bg-slate-50 dark:bg-zinc-950 border border-slate-200 dark:border-zinc-800 text-zinc-900 dark:text-white text-sm rounded-xl px-4 py-3 placeholder-zinc-400 dark:placeholder-zinc-700 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500/30 transition-all font-sans"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-xs font-mono text-zinc-500 dark:text-zinc-400 uppercase mb-2 transition-colors">
                    Tiêu đề liên hệ
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formState.subject}
                    onChange={handleChange}
                    placeholder="Hợp tác phát triển hệ thống..."
                    className="w-full bg-slate-50 dark:bg-zinc-950 border border-slate-200 dark:border-zinc-800 text-zinc-900 dark:text-white text-sm rounded-xl px-4 py-3 placeholder-zinc-400 dark:placeholder-zinc-700 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500/30 transition-all font-sans"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-xs font-mono text-zinc-500 dark:text-zinc-400 uppercase mb-2 transition-colors">
                    Nội dung lời nhắn <span className="text-cyan-600 dark:text-cyan-400">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formState.message}
                    onChange={handleChange}
                    placeholder="Hãy mô tả ngắn gọn về dự án hoặc yêu cầu hợp tác của bạn..."
                    required
                    className="w-full bg-slate-50 dark:bg-zinc-950 border border-slate-200 dark:border-zinc-800 text-zinc-900 dark:text-white text-sm rounded-xl px-4 py-3 placeholder-zinc-400 dark:placeholder-zinc-700 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500/30 transition-all font-sans resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="shimmer-btn w-full bg-gradient-to-r from-cyan-500 to-emerald-500 hover:from-cyan-600 hover:to-emerald-600 text-zinc-950 font-bold text-sm py-4 rounded-xl transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <span>Đang gửi dữ liệu...</span>
                  ) : (
                    <>
                      Gửi tin nhắn liên hệ
                      <Send className="w-4 h-4 text-zinc-950" />
                    </>
                  )}
                </button>

                {submitSuccess && (
                  <div className="p-3 text-center rounded-xl bg-emerald-50/50 dark:bg-emerald-950/20 border border-emerald-200 dark:border-emerald-500/30 text-emerald-700 dark:text-emerald-400 text-xs font-sans animate-fade-in transition-colors">
                    ✓ Cảm ơn đã gửi liên hệ.
                  </div>
                )}

                {errorMessage && (
                  <div className="p-3 text-center rounded-xl bg-red-50/50 dark:bg-red-950/20 border border-red-200 dark:border-red-500/30 text-red-700 dark:text-red-400 text-xs font-sans animate-fade-in transition-colors">
                    ✗ {errorMessage}
                  </div>
                )}
              </form>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
