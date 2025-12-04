import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header style={{
      backgroundColor: '#1b1b1d',
      padding: '4rem 0',
      textAlign: 'center',
      color: '#fff'
    }}>
      <div className="container">
        <h1 style={{fontSize: '3rem', fontWeight: 'bold'}}>
          {siteConfig.title}
        </h1>
        <p style={{fontSize: '1.5rem', opacity: 0.8}}>
          {siteConfig.tagline}
        </p>
        <div style={{marginTop: '2rem'}}>
          <Link
            className="button button--primary button--lg"
            // 🔥 修复点：这里也去掉了 01-
            to="/docs/history/overview"
            style={{
              backgroundColor: '#25c2a0',
              borderColor: '#25c2a0',
              color: '#fff',
              padding: '10px 20px',
              textDecoration: 'none'
            }}>
            🚀 进入知识库
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={siteConfig.title}
      description="科幻文学基础知识库">
      <HomepageHeader />
      <main style={{
        padding: '4rem 2rem',
        textAlign: 'center',
        maxWidth: '800px',
        margin: '0 auto'
      }}>
        <h2>👋 欢迎来到科幻世界</h2>
        <p style={{fontSize: '1.2rem', lineHeight: '1.8'}}>
          这是一个个人整理的科幻文学知识图谱。<br/>
          你可以点击上方按钮，或左上角的“知识库”开始浏览。
        </p>
      </main>
    </Layout>
  );
}