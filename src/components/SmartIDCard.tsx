'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { User, Globe, ShieldCheck } from 'lucide-react';

interface SmartIDCardProps {
  data?: {
    name: string;
    passport: string;
    dob: string;
    gender: string;
    address: string;
    job: string;
    nationality: string;
    visaType: string;
    regNo: string;
    idNo: string;
    issued: string;
    expires: string;
  };
}

export default function SmartIDCard({ data }: SmartIDCardProps) {
  const [isFlipped, setIsFlipped] = useState(false);

  const defaultData = {
    name: "SARAH J. WILLIAMS",
    passport: "A1234567",
    dob: "LONDON, 01-01-1990",
    gender: "PEREMPUAN",
    address: "Jl. Sunset Road No.7, Kuta, Bali Indonesia.",
    job: "INVESTOR",
    nationality: "UNITED KINGDOM",
    visaType: "E28A INVESTOR KITAS",
    regNo: "NOT_LINKED",
    idNo: "9971-0024-889100",
    issued: "2025-12-01",
    expires: "LIFETIME ACCESS"
  };

  const cardData = data || defaultData;

  return (
    <div className="relative group perspective-1000 max-w-xl mx-auto">
      <motion.div
        onClick={() => setIsFlipped(!isFlipped)}
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.8, ease: "circOut" }}
        style={{ transformStyle: "preserve-3d" }}
        className="relative aspect-[1.58/1] w-full cursor-pointer"
      >
        {/* Front Side */}
        <div
          className="absolute inset-0 w-full h-full backface-hidden bg-[#dcf2fe] rounded-3xl shadow-2xl overflow-hidden border border-white/40 p-5 md:p-7 text-slate-800 font-sans tracking-tight"
          style={{ backfaceVisibility: "hidden" }}
        >
          <div className="absolute inset-0 opacity-20 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] mix-blend-overlay" />
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-[0.07]">
            <img src="/logo.webp" alt="Logo Watermark" className="w-1/3 h-auto grayscale" />
          </div>

          <div className="relative h-full flex flex-col">
            <div className="flex justify-between items-start mb-4">
              <div className="flex items-center gap-3">
                <div className="w-8 h-5 bg-red-600 border border-slate-200 relative">
                  <div className="absolute bottom-0 w-full h-1/2 bg-white" />
                </div>
                <div className="leading-none">
                  <div className="text-[10px] md:text-[12px] font-black text-[#1e40af] uppercase">PROVINSI BALI</div>
                  <div className="text-[8px] md:text-[10px] font-bold text-slate-500 uppercase tracking-wider">SMART SYSTEM IDENTITY</div>
                </div>
              </div>
              <div className="text-[8px] md:text-[12px] font-bold text-slate-400 uppercase">
                REG NO: <span className="text-slate-600">{cardData.regNo}</span>
              </div>
            </div>

            <div className="flex-1 flex gap-6 md:gap-10">
              <div className="flex-1 space-y-2 md:space-y-3">
                <div className="flex items-baseline gap-4 mb-4">
                  <div className="text-xl md:text-2xl font-black text-slate-800 tracking-tight">ID No</div>
                  <div className="text-xl md:text-2xl font-black text-slate-800 tracking-wider">: {cardData.idNo}</div>
                </div>

                <div className="space-y-1 md:space-y-2 mt-4">
                  {[
                    { label: "Nama", value: cardData.name },
                    { label: "No Passport", value: cardData.passport },
                    { label: "Tempat/Tgl Lahir", value: cardData.dob },
                    { label: "Jenis Kelamin", value: cardData.gender },
                    { label: "Alamat", value: cardData.address },
                    { label: "Pekerjaan", value: cardData.job },
                    { label: "Kewarganegaraan", value: cardData.nationality },
                    { label: "Jenis Visa", value: cardData.visaType }
                  ].map((item, i) => (
                    <div key={i} className="flex gap-2 text-[8px] md:text-[11px] leading-tight">
                      <div className="w-20 md:w-28 font-bold text-slate-600 uppercase shrink-0">{item.label}</div>
                      <div className="font-bold shrink-0">:</div>
                      <div className="font-black uppercase text-slate-700">{item.value}</div>
                    </div>
                  ))}
                </div>

                <div className="flex gap-10 pt-2">
                  <div>
                    <div className="text-[7px] md:text-[9px] font-bold text-slate-400 uppercase">ISSUED</div>
                    <div className="text-[10px] md:text-[13px] font-black text-slate-800">{cardData.issued}</div>
                  </div>
                  <div>
                    <div className="text-[7px] md:text-[9px] font-bold text-slate-400 uppercase">EXPIRES</div>
                    <div className="text-[10px] md:text-[13px] font-black text-amber-600 flex items-center gap-1 uppercase">
                      {cardData.expires} <Globe className="w-3 h-3" />
                    </div>
                  </div>
                </div>
              </div>

              <div className="w-22 md:w-32 pt-12 flex flex-col items-center gap-2">
                <div className="w-full aspect-[3/4] bg-white rounded-xl border border-blue-200 shadow-inner flex items-center justify-center relative overflow-hidden">
                  <User className="w-14 md:w-20 text-blue-100" />
                  <div className="absolute bottom-0 w-full h-4 bg-blue-500/10 flex items-center justify-center">
                    <div className="w-1/2 h-[1px] bg-blue-200" />
                  </div>
                </div>
                <div className="text-[7px] md:text-[9px] font-bold text-slate-400 text-center uppercase leading-tight">
                  Smart ID by <br /> indonesianvisas.com
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Back Side */}
        <div
          className="absolute inset-0 w-full h-full backface-hidden bg-white rounded-3xl shadow-2xl overflow-hidden border border-slate-100 p-8 flex flex-col items-center justify-between"
          style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}
        >
          <div className="w-full flex justify-center items-center gap-3 pb-6 border-b border-slate-50">
            <div className="w-10 h-10 bg-[#1e40af] rounded-xl flex items-center justify-center p-2 shadow-lg shadow-blue-900/20">
              <div className="grid grid-cols-2 gap-1">
                <div className="w-2 h-2 bg-white rounded-full" />
                <div className="w-2 h-2 bg-white rounded-full" />
                <div className="w-2 h-2 bg-white rounded-full" />
                <div className="w-2 h-2 bg-white rounded-full" />
              </div>
            </div>
            <div className="text-base font-black text-[#1e40af] tracking-wider uppercase">SMART VERIFICATION CODE</div>
          </div>

          <div className="flex-1 w-full flex items-center justify-center gap-8 md:gap-12 py-4 md:py-6">
            <div className="flex flex-col items-center gap-6">
              <div className="flex flex-col items-center gap-2">
                <div className="flex items-center justify-center h-8 w-14 relative">
                  {[0, 1, 2, 3].map((i) => (
                    <motion.div
                      key={i}
                      animate={{
                        opacity: [0.2, 1, 0.2],
                        scale: [1, 1.05, 1],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: i * 0.3,
                        ease: "easeInOut"
                      }}
                      className="absolute border-r-[3px] border-[#1e40af] rounded-full"
                      style={{
                        width: `${16 + i * 10}px`,
                        height: `${16 + i * 10}px`,
                        left: `${-8 + i * 2}px`
                      }}
                    />
                  ))}
                </div>
                <div className="text-[9px] font-black text-slate-400 uppercase tracking-widest mt-1">CONTACTLESS</div>
              </div>

              <div className="flex flex-col items-center gap-1">
                <div className="flex gap-1 h-10">
                  {[1, 3, 1, 2, 1, 3, 1, 2, 1].map((w, i) => (
                    <div key={i} className="bg-slate-900" style={{ width: `${w * 1.5}px` }} />
                  ))}
                </div>
                <div className="text-[10px] font-black text-slate-900 tracking-widest uppercase">A1234567</div>
              </div>
            </div>

            <div className="flex flex-col items-center gap-3">
              <div className="w-32 h-32 md:w-36 md:h-36 bg-white p-4 rounded-[32px] shadow-[0_15px_40px_rgba(0,0,0,0.1)] border border-slate-50 flex items-center justify-center">
                <img
                  src={`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${cardData.regNo}&color=0f172a`}
                  alt="QR Code"
                  className="w-full h-full"
                />
              </div>
              <div className="text-[11px] md:text-[13px] font-black text-[#1e40af] tracking-[0.4em] uppercase">{cardData.regNo}</div>
            </div>
          </div>

          <div className="w-full text-center pt-3 border-t border-slate-100">
            <div className="text-[9px] md:text-[11px] font-black text-slate-400 uppercase tracking-[0.2em] leading-relaxed">
              OFFICIAL SPONSOR ID • SECURED VIA IDIV SYSTEM • INDONESIANVISAS.COM
            </div>
          </div>
        </div>
      </motion.div>

      <div className="mt-4 text-center">
        <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest animate-pulse">Click Card to Flip</span>
      </div>
    </div>
  );
}
