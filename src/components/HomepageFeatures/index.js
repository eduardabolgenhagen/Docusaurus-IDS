import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Fácil utilização',
    Svg: require('@site/static/img/aaaa.svg').default,
    description: (
      <>
        Visando uma melhoria de um novo sistema para registrar demandas de novos sistemas e buscando extinguir o uso do formulário em SharePoint.
      </>
    ),
  },
  {
    title: 'Organize sua empresa',
    Svg: require('@site/static/img/organize.svg').default,
    description: (
      <>
         Um sistema para gerenciamento dos processos das demandas durante sua execução.
      </>
    ),
  },
  {
    title: 'Modernize o seu negócio',
    Svg: require('@site/static/img/modernize.svg').default,
    description: (
      <>
        Facilitar o método burocrático de gestão das solicitações e aprovações de sistemas de TI, 
        centralizando os dados e otimizando o processo produtivo.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
