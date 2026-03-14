import React, { useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Loader2, CheckCircle2, WhatsappIcon } from "lucide-react";

interface TrialModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function TrialModal({ isOpen, onClose }: TrialModalProps) {
  const [step, setStep] = useState<'form' | 'loading' | 'success' | 'error'>('form');
  const [formData, setFormData] = useState({ name: '', phone: '' });
  const [testData, setTestData] = useState<{ user?: string; pass?: string; msg?: string } | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStep('loading');

    try {
      const response = await fetch('/api/generate-test', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setTestData(data);
        setStep('success');
      } else {
        setStep('error');
      }
    } catch (error) {
      setStep('error');
    }
  };

  const handleWhatsAppRedirect = () => {
    const sellerNumber = '5511910437332';
    const message = `Olá, gerei um teste através do site. Esse é meu login: ${testData?.user || 'Automático'} e senha: ${testData?.pass || 'Automática'}. O que devo fazer agora?`;
    window.open(`https://wa.me/${sellerNumber}?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[425px] bg-card border-primary/20">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-center">
            {step === 'success' ? 'Teste Gerado!' : 'Acesso Imediato'}
          </DialogTitle>
          <DialogDescription className="text-center">
            {step === 'form' && 'Preencha abaixo para receber seu teste gratuito agora mesmo.'}
            {step === 'success' && 'Suas credenciais foram geradas com sucesso.'}
            {step === 'error' && 'Ocorreu um erro ao gerar seu teste. Tente novamente via WhatsApp.'}
          </DialogDescription>
        </DialogHeader>

        {step === 'form' && (
          <form onSubmit={handleSubmit} className="space-y-4 mt-4">
            <div className="space-y-2">
              <Label htmlFor="name">Seu Nome</Label>
              <Input
                id="name"
                placeholder="Ex: João Silva"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="bg-background border-primary/10 transition-all focus:border-primary"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="phone">Seu WhatsApp</Label>
              <Input
                id="phone"
                placeholder="Ex: 11 99999-9999"
                required
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="bg-background border-primary/10 transition-all focus:border-primary"
              />
            </div>
            <Button type="submit" className="w-full font-bold h-12 text-lg animate-pulse hover:animate-none">
              GERAR MEU TESTE AGORA
            </Button>
          </form>
        )}

        {step === 'loading' && (
          <div className="flex flex-col items-center justify-center py-12 space-y-4">
            <Loader2 className="w-12 h-12 text-primary animate-spin" />
            <p className="text-muted-foreground font-medium">Gerando suas credenciais...</p>
          </div>
        )}

        {step === 'success' && (
          <div className="space-y-6 mt-4">
            <div className="bg-primary/5 border border-primary/20 rounded-xl p-6 text-center space-y-4">
              <CheckCircle2 className="w-12 h-12 text-primary mx-auto" />
              <div className="space-y-1">
                <p className="text-xs text-muted-foreground uppercase font-bold tracking-wider">Usuário</p>
                <p className="text-2xl font-mono font-bold text-primary">{testData?.user || 'Gerando...'}</p>
              </div>
              <div className="space-y-1">
                <p className="text-xs text-muted-foreground uppercase font-bold tracking-wider">Senha</p>
                <p className="text-2xl font-mono font-bold text-primary">{testData?.pass || 'Gerando...'}</p>
              </div>
            </div>

            <Button 
              onClick={handleWhatsAppRedirect}
              className="w-full h-14 bg-[#25D366] hover:bg-[#20ba5a] text-white font-black text-lg gap-2 shadow-lg shadow-green-500/20 active:scale-95 transition-all"
            >
              RECEBER NO WHATSAPP
            </Button>
            
            <p className="text-[10px] text-center text-muted-foreground">
              Clique no botão acima para abrir seu teste direto no aplicativo.
            </p>
          </div>
        )}

        {step === 'error' && (
          <div className="py-8 space-y-4">
            <Button 
              onClick={() => window.open('https://wa.me/5511910437332', '_blank')}
              className="w-full h-12 font-bold"
            >
              FALAR COM SUPORTE
            </Button>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}
