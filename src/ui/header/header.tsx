import { Link } from 'react-router-dom';

import { Container } from 'ui/base/container/container';

import styles from './header.module.css';

export const Header = () => {
  return (
    <Container display="flex" justifyContent="center">
      <Container
        width="large"
        display="flex"
        justifyContent="space-around"
        className={styles.header}
      >
        <Container width="full" className={styles.linkContainer}>
          <Link to={'matches'} className={styles.link}>
            <Container width="full">Matches</Container>
          </Link>
        </Container>
        <Container width="full" className={styles.linkContainer}>
          <Link to={'champions'} className={styles.link}>
            <Container width="full">Champions</Container>
          </Link>
        </Container>
        <Container width="full" className={styles.linkContainer}>
          <Link to={'players'} className={styles.link}>
            <Container width="full">Players</Container>
          </Link>
        </Container>
        <Container width="full" className={styles.linkContainer}>
          <Link to={'pairs'} className={styles.link}>
            <Container width="full">Player Pairs</Container>
          </Link>
        </Container>
      </Container>
    </Container>
  );
};
