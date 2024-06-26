import styles from "../styles/PizzaList.module.css";
import PizzaCard from "./PizzaCard";

const PizzaList = ({ pizzaList }) => {
  console.log('pizzaList:', pizzaList);

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>The Best Pizza In The Whole World</h1>
      <p className={styles.desc}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut blandit arcu
        in pretium molestie. Interdum et malesuada fames acme. Lorem ipsum dolor
        sit amet, consectetur adipiscing elit.
      </p>
      <div className={styles.wrapper}>
        {pizzaList.map((pizza) => (
          <PizzaCard key={pizza._id} pizza={pizza} />
        ))}
        {/* {pizzaList && pizzaList.map((pizza) => (
  <PizzaCard key={pizza._id} pizza={pizza} />
))} */}

      </div>
    </div>
  );
};

export default PizzaList;
