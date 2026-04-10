import { useState, useCallback, useEffect, useRef } from 'react';

export function useDialog() {
  const [isOpen, setIsOpen] = useState(false);
  const dialogRef = useRef<HTMLDialogElement>(null);

  const open = useCallback(() => {
    setIsOpen(true);
    dialogRef.current?.showModal();
    document.documentElement.style.overflow = 'hidden';
  }, []);

  const close = useCallback(() => {
    setIsOpen(false);
    dialogRef.current?.close();
    document.documentElement.style.removeProperty('overflow');
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (isOpen && e.key === 'Escape') {
        e.preventDefault();
        close();
      }
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, close]);

  const handleOverlayClick = useCallback(
    (e: React.MouseEvent<HTMLDialogElement>) => {
      if (e.target === dialogRef.current) {
        close();
      }
    },
    [close],
  );

  return { isOpen, open, close, dialogRef, handleOverlayClick };
}
