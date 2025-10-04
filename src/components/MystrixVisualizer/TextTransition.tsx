import React, { useState, useRef, useEffect } from 'react';
import type { CSSProperties, PropsWithChildren } from 'react';

import { useSpring, useTransition, animated, config, SpringConfig } from '@react-spring/web';

export interface TextTransitionProps {
  className?: string;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right';
  inline?: boolean;
  springConfig?: SpringConfig;
  style?: CSSProperties;
  translateValue?: string;
}

function TextTransition(props: PropsWithChildren<TextTransitionProps>) {
  const {
    direction = 'up',
    inline = false,
    springConfig = config.default,
    delay = 0,
    className,
    style,
    translateValue: tv = '100%',
    children,
  } = props;

  const initialRun = useRef(true);

  // Determine if we're using horizontal or vertical transition
  const isHorizontal = direction === 'left' || direction === 'right';
  const translateProp = isHorizontal ? 'translateX' : 'translateY';

  // Calculate from and leave transforms based on direction
  let fromTransform: string;
  let leaveTransform: string;

  if (direction === 'down' || direction === 'right') {
    fromTransform = `-${tv}`;
    leaveTransform = tv;
  } else { // 'up' or 'left'
    fromTransform = tv;
    leaveTransform = `-${tv}`;
  }

  const transitions = useTransition([children], {
    enter: { opacity: 1, transform: `${translateProp}(0%)` },
    from: { opacity: 0, transform: `${translateProp}(${fromTransform})` },
    leave: {
      opacity: 0,
      transform: `${translateProp}(${leaveTransform})`,
      position: 'absolute',
    },
    config: springConfig,
    immediate: initialRun.current,
    delay: !initialRun.current ? delay : undefined,
  });

  const [width, setWidth] = useState<number | string>('auto');
  const currentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    initialRun.current = false;
    const element = currentRef.current;

    // If element doesn't exist, then do nothing
    if (!element) return;

    const { width } = element.getBoundingClientRect();

    setWidth(width);
  }, [children, setWidth, currentRef]);

  const widthTransition = useSpring({
    to: { width },
    config: springConfig,
    immediate: initialRun.current,
    delay: !initialRun.current ? delay : undefined,
  });

  return (
    <animated.div
      className={`text-transition ${className}`}
      style={{
        ...(inline && !initialRun.current ? widthTransition : undefined),
        ...style,
        whiteSpace: inline ? 'nowrap' : 'pre-wrap',
        display: inline ? 'inline-flex' : 'flex',
        width: '100%',
      }}
    >
      {transitions((styles, item) => (
        <animated.div
          style={{ ...styles, width: '100%' }}
          ref={item === children ? currentRef : undefined}
          children={item}
        />
      ))}
    </animated.div>
  );
}

export default TextTransition;
