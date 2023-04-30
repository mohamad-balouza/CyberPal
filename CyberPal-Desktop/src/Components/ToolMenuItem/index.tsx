import React, { useState } from 'react';
import { motion } from "framer-motion";


function ToolMenuItem() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <motion.div
                layout
                data-isOpen={isOpen}
                initial={{ borderRadius: 50 }}
                className="tool-menu-item"
                onTap={() => setIsOpen(!isOpen)}
            >
            <motion.div layout className="child">{isOpen ? "hello" : "How are you"}</motion.div>

        </motion.div>
  )
}

export default ToolMenuItem