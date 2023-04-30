import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from "framer-motion";


function ToolMenuItem() {
    const [isOpen, setIsOpen] = useState(false);
    const [x, setX] = useState<number | undefined>();
    const [y, setY] = useState<number | undefined>();
    const tool_ref = useRef<HTMLDivElement>(null);
    const [selectedid, setSelectedid] = useState(null);


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
                    layoutId="1"
                    data-isOpen={isOpen}
                    initial={{ borderRadius: 50 }}
                    className="tool-menu-item"
                    onTap={() => setSelectedid(1)}
                >
                <motion.div ref={tool_ref} layout className="child" onTap={() => handleGettingInfo()}>
                    <div>
                        {isOpen ? "hello" : "How are you"}  
                    </div>
                    <h2>X: {x ?? "No result"}</h2>
                    <h2>Y: {y ?? "No result"}</h2>
                </motion.div>

            </motion.div>

            <AnimatePresence>
                {selectedid && (
                <motion.div layoutId={selectedid}>
                    <motion.h5>Hello</motion.h5>
                    <motion.h2>team</motion.h2>
                    <motion.button onClick={() => setSelectedid(null)} />
                </motion.div>
                )}
            </AnimatePresence>
        </>
  )
}

export default ToolMenuItem