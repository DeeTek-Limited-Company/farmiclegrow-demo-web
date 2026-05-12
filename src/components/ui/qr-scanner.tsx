"use client";

import React, { useEffect, useState } from "react";
import { Html5QrcodeScanner } from "html5-qrcode";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { QrCode, Camera, Loader2, X } from "lucide-react";

export function QRScanner() {
  const router = useRouter();
  const [isScannerOpen, setIsScannerOpen] = useState(false);

  useEffect(() => {
    let scanner: Html5QrcodeScanner | null = null;

    if (isScannerOpen) {
      // Small delay to ensure the element is in the DOM
      const timer = setTimeout(() => {
        scanner = new Html5QrcodeScanner(
          "qr-reader",
          { fps: 10, qrbox: { width: 250, height: 250 } },
          /* verbose= */ false
        );

        scanner.render(
          (decodedText) => {
            // Check if it's a full URL or just a code
            let code = decodedText;
            try {
              const url = new URL(decodedText);
              if (url.pathname.startsWith("/trace/")) {
                code = url.pathname.split("/").pop() || decodedText;
              }
            } catch (e) {
              // Not a URL, use as is
            }

            scanner?.clear();
            setIsScannerOpen(false);
            router.push(`/trace/${code}`);
          },
          (error) => {
            // Scan errors are common and can be ignored
          }
        );
      }, 500);

      return () => {
        clearTimeout(timer);
        if (scanner) {
          scanner.clear().catch(console.error);
        }
      };
    }
  }, [isScannerOpen, router]);

  return (
    <Dialog open={isScannerOpen} onOpenChange={setIsScannerOpen}>
      <DialogTrigger asChild>
        <Button
          variant="outline"
          className="rounded-full px-6 font-black gap-2 border-primary/20 hover:bg-primary/5 text-primary"
        >
          <Camera className="w-4 h-4" />
          Scan QR
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[450px] rounded-[2.5rem] p-0 overflow-hidden border-0 shadow-2xl bg-white">
        <div className="bg-slate-900 p-8 text-white">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-2xl bg-primary/20 flex items-center justify-center">
                <QrCode className="w-6 h-6 text-primary" />
              </div>
              <div>
                <DialogTitle className="text-2xl font-black">Scan Product</DialogTitle>
                <p className="text-slate-400 text-sm font-medium">Point camera at the batch label</p>
              </div>
            </div>
          </div>
        </div>

        <div className="p-8 bg-white">
          <div
            id="qr-reader"
            className="rounded-3xl overflow-hidden border-2 border-dashed border-slate-200 bg-slate-50 min-h-[300px] flex items-center justify-center relative"
          >
            <div className="text-center p-8 space-y-4">
              <Loader2 className="w-8 h-8 text-primary animate-spin mx-auto" />
              <p className="text-sm font-bold text-slate-500 uppercase tracking-widest">
                Initializing Camera...
              </p>
            </div>
          </div>
          
          <div className="mt-8 text-center">
            <p className="text-xs font-medium text-slate-400 leading-relaxed">
              Ensure you have granted camera permissions in your browser. <br/>
              The scanner will automatically redirect once a code is detected.
            </p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
