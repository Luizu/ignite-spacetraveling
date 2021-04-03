import { useEffect } from 'react';

export function Comments(): JSX.Element {
  useEffect(() => {
    const script = document.createElement('script');
    const anchor = document.getElementById('inject-comments-for-uterances');

    script.setAttribute('src', 'https://utteranc.es/client.js');
    script.setAttribute('crossorigin', 'anonymous');
    script.setAttribute('async', 'true');
    script.setAttribute('repo', 'Luizu/ignite-spacetraveling');
    script.setAttribute('issue-term', 'url');
    script.setAttribute('label', 'blog-comment');
    script.setAttribute('theme', 'dark-blue');

    anchor.appendChild(script);
  }, []);

  return <div id="inject-comments-for-uterances" />;
}
