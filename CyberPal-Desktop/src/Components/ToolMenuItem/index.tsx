import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from "framer-motion";


function ToolMenuItem() {
    const [isOpen, setIsOpen] = useState(false);
    const [x, setX] = useState<number | undefined>();
    const [y, setY] = useState<number | undefined>();
    const tool_ref = useRef<HTMLDivElement>(null);


    const getPosition = () => {
        const x = tool_ref.current?.offsetLeft;
        setX(x);

        const y = tool_ref.current?.offsetTop;
        setY(y);
    }

    const handleGettingInfo = () => {
        getPosition();
    }

    useEffect(() => {
        getPosition();
      }, []);

    return (
        <AnimatePresence>
            <motion.div
                    layout
                    data-isOpen={isOpen}
                    initial={{ borderRadius: 50 }}
                    className="tool-menu-item"
                    onTap={() => setIsOpen(!isOpen)}
                >
                <motion.div layout className="child">
                    <div>
                        {isOpen ? "hello" : "How are you"}  
                    </div>
                </motion.div>

            </motion.div>
        </AnimatePresence>
  )
}

export default ToolMenuItem