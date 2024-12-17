import { useState, useCallback } from 'react';

interface DialogState {
  isOpen: boolean;
  showCorner: boolean;
}

export function useDialog(initialState = false) {
  const [state, setState] = useState<DialogState>({
    isOpen: initialState,
    showCorner: false
  });

  const open = useCallback(() => {
    setState({ isOpen: true, showCorner: false });
  }, []);

  const close = useCallback(() => {
    setState({ isOpen: false, showCorner: true });
  }, []);

  const toggle = useCallback(() => {
    setState(prev => ({ 
      isOpen: !prev.isOpen, 
      showCorner: !prev.isOpen ? false : prev.showCorner 
    }));
  }, []);

  return { 
    isOpen: state.isOpen, 
    showCorner: state.showCorner,
    open, 
    close, 
    toggle 
  };
}