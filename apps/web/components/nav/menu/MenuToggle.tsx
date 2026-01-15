"use client";

import { motion, AnimatePresence } from "motion/react";
import { Menu as MenuIcon, X } from "lucide-react";

import { Button } from "@/components/ui/button";

type MenuToggleProps = {
  isOpen: boolean;
  onMenuToggle: () => void;
};

const MenuToggle = ({ isOpen, onMenuToggle }: MenuToggleProps) => {
  return (
    <Button size="icon" onClick={onMenuToggle} className="overflow-hidden">
      <motion.div
        animate={{ rotate: isOpen ? -180 : 0 }}
        transition={{ duration: 0.4 }}
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div
              key="x"
              initial={{ opacity: 0, scale: 0.6 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0.5, scale: 0.6 }}
              transition={{ duration: 0.3 }}
            >
              <X size={16} />
            </motion.div>
          ) : (
            <motion.div
              key="menu"
              initial={{ opacity: 0, scale: 0.6 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0.5, scale: 0.6 }}
              transition={{ duration: 0.3 }}
            >
              <MenuIcon size={16} />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </Button>
  );
};

export default MenuToggle;
