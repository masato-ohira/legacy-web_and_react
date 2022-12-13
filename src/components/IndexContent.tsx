import { css } from '@emotion/react'

export const IndexContent = () => {
  const styles = {
    box: css`
      border: 1px solid #ddd;
      padding: 30px;
      max-width: 640px;
      margin: 40px auto;
      background-color: #fff;
    `,
  }
  return (
    <div css={styles.box}>
      <div>INDEX PAGE</div>
    </div>
  )
}
