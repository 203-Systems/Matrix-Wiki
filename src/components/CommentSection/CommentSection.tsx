import React from 'react';
import Giscus from "@giscus/react";
import { useColorMode } from '@docusaurus/theme-common';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

export default function GiscusComponent() {
  const { colorMode } = useColorMode();
  const { i18n } = useDocusaurusContext();

  return (
    <Giscus    
      repo="203-Systems/Matrix-Wiki"
      repoId="R_kgDOMv99gw"
      category="Comments"
      categoryId="DIC_kwDOMv99g84Ci8V7" 
      mapping="pathname"
      strict="1"
      reactionsEnabled="0"
      emitMetadata="0"
      inputPosition="top"
      theme={colorMode == 'dark' ? 'https://matrix.203.io/giscus-dark.css' : 'https://matrix.203.io/giscus-light.css'}
      lang={i18n.currentLocale === 'zh-Hans' ? 'zh-CN' : 'en'}
      loading="lazy"
      crossorigin="anonymous"
      async
    />
  );
}