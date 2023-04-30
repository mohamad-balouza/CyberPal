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
        <>
            <motion.div
                    layout
                    data-isOpen={isOpen}
                    initial={{ borderRadius: 50 }}
                    className="tool-menu-item"
                    onTap={() => setIsOpen(!isOpen)}
                >
                <motion.div ref={tool_ref} layout className="child" onTap={() => handleGettingInfo()}>
                    <div>
                        {isOpen ? "hello" : "How are you"}  
                    </div>
                    <h2>X: {x ?? "No result"}</h2>
                    <h2>Y: {y ?? "No result"}</h2>
                </motion.div>

            </motion.div>
        </>
  )
}

export default ToolMenuItem