"use client";

import { useEffect, useState } from "react";
import { Modal } from "@/components/ui/modal";
import { Button } from "@/components/ui/button";

interface AlertModalProps{
    isOpen: boolean,
    onClose: ()=>void;
    onConfirm: ()=>void;
    loading: boolean;
}

export const AlertModel: React.FC<AlertModalProps> = ({
    isOpen,
    onClose,
    onConfirm,
    loading
}) =>{
    const [mounted, isMounted] = useState(false);

    useEffect(()=>{
        isMounted(true);
    }, []);

    if(!mounted){
        return null;
    }

    return (
        <Modal title="Jeste li sigurni?" description="Ova akcija se ne može povratiti." isOpen={isOpen} onClose={onClose} >
            <div className="pt-6 space-x-2 flex flex-items justify-end w-full">
                <Button disabled={loading} variant="outline" onClick={onClose}>Otkaži</Button>
                <Button disabled={loading} variant="destructive" onClick={onConfirm}>Nastavi</Button>
            </div>
        </Modal>
    )
}