import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from "framer-motion";


function ToolMenuItem(props) {
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
        <div>
            {props.tool_name}
        </div>
  )
}

export default ToolMenuItem