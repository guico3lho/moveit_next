import { useContext, useState } from "react";
import { ChallengesContext } from "../../contexts/ChallengesContexts";
import styles from "./styles.module.scss";

export default function ChallengeBox() {
  const { activeChallenge, resetChallenge, completeChallenge } =
    useContext(ChallengesContext);

  return (
    <div className={styles.container}>
      {activeChallenge ? (
        <div className={styles.hasActiveChallenge}>
          <header>{`Ganhe ${activeChallenge.amount} XP`}</header>

          <main>
            <img src={`icons/${activeChallenge.type}.svg`} alt="halter" />
            <h1>Exercite-se</h1>
            <p>{activeChallenge.description}</p>
          </main>

          <footer>
            <button
              type="button"
              id="Falhei"
              onClick={resetChallenge}
              className={styles.challengeFailedButton}
            >
              Falhei
            </button>
            <button
              type="button"
              id="Completei"
              onClick={completeChallenge}
              className={styles.challengeSucceddedButton}
            >
              Completei
            </button>
          </footer>
        </div>
      ) : (
        <div className={styles.hasNotActiveChallenge}>
          <strong>Finalize um ciclo para receber um desafio</strong>
          <p>
            <img src="icons/level-up.svg" alt="level-up" />
            Avance de level completando desafios.
          </p>
        </div>
      )}
    </div>
  );
}
