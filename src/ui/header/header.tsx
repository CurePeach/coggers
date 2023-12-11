import * as React from 'react';
import { Link } from 'react-router-dom';

import { Container } from 'ui/base/container/container';
import { EmphasizedText } from 'ui/base/typography';
import { Page } from 'utils/route_loaders';

import styles from './header.module.css';

export type HeaderProps = {
  currentPage: Page | undefined;
};

export const Header = ({ currentPage }: HeaderProps) => {
  return (
    <Container display="flex" justifyContent="center" className={styles.headerContainer}>
      <Container
        width="large"
        display="flex"
        justifyContent="space-around"
        className={styles.header}
      >
        <Container width="full" className={styles.linkContainer}>
          <Link to={'matches'} className={styles.link}>
            <Container width="full">
              {currentPage === 'matches' ? <EmphasizedText>Matches</EmphasizedText> : <>Matches</>}
            </Container>
          </Link>
        </Container>
        <Container width="full" className={styles.linkContainer}>
          <Link to={'champions'} className={styles.link}>
            <Container width="full">
              {currentPage === 'champions' ? (
                <EmphasizedText>Champions</EmphasizedText>
              ) : (
                <>Champions</>
              )}
            </Container>
          </Link>
        </Container>
        <Container width="full" className={styles.linkContainer}>
          <Link to={'players'} className={styles.link}>
            <Container width="full">
              {currentPage === 'players' ? <EmphasizedText>Players</EmphasizedText> : <>Players</>}
            </Container>
          </Link>
        </Container>
        <Container width="full" className={styles.linkContainer}>
          <Link to={'pairs'} className={styles.link}>
            <Container width="full">
              {currentPage === 'pairs' ? (
                <EmphasizedText>Player Pairs</EmphasizedText>
              ) : (
                <>Player Pairs</>
              )}
            </Container>
          </Link>
        </Container>
      </Container>
    </Container>
  );
};
