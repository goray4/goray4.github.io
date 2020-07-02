import React from 'react'
import { css } from '@emotion/core'
import { LunrSearch } from './LunrSearch'

const style = {
  footer: css`
    display: flex;
    flex-direction: row;
    flex-shrink: 0;
    justify-content: space-around;
    background: #ff57008a;
    padding: 1rem;
  `,
  left: css`
    color: white;
  `,
  center: css`
    color: white;
  `,
  right: css`
    color: white;
  `,
}

export const Footer = () => (
  <footer css={style.footer}>
    <div css={style.left}>
      <h3>
        Goray<span>4</span>
      </h3>
      <p>
        <a href="/">Home</a>·<a href="/">Blog</a>·<a href="/">Pricing</a>·<a href="/">About</a>·
        <a href="/">Faq</a>·<a href="/">Contact</a>
      </p>
      <p>Goray 4 &copy; 2020</p>
    </div>

    <div css={style.center}>
      <div>
        <i></i>
        <p>London</p>
      </div>

      <div>
        <i></i>
        <p>+1234567890</p>
      </div>

      <div>
        <i></i>
        <p>
          <a href="mailto:support@company.com">contact@nasarali.com</a>
        </p>
      </div>
    </div>

    <div css={style.right}>
      <p>
        <span>Search</span>
      </p>
      <div>
        <LunrSearch limit={10} />
      </div>
    </div>
  </footer>
)
