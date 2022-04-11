import { encryptStorageAdmin } from "../../utils/encryptStorage";
import styles from "./AdminProposals.module.scss";
import Navbar from "../../Atom/Navbar/Navbar";
import { SelectPicker } from "rsuite";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  getCategories,
  getPoposalsByCategory,
} from "../../utils/apiCalls/firebaseRequests";

const AdminProposals = () => {
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [proposalsList, setProposalsList] = useState(null);

  useEffect(() => getCategories(setCategories), []);
  useEffect(
    () => getPoposalsByCategory(selectedCategory, setProposalsList),
    [selectedCategory]
  );
  console.log("proposalsList", proposalsList);
  return (
    <div className={styles.container}>
      <Navbar />
      <h1 className={styles.headerText}>
        Редагування погоджених та неперевірених пропозицій
      </h1>
      <div className={styles.flexBox}>
        <div>
          <h3>Редагування погоджених пропозицій</h3>
            {/*{proposalsList?.length > 0 &&*/}
            {/*    proposalsList.map((item) => (*/}
            {/*        <div>*/}
            {/*            <p>Назва юридичної/фізичної особи - {item.name}</p>*/}
            {/*            <p>ЄДРПОУ або ІПН - {item.code}</p>*/}
            {/*            <p>Контактна особа * {item.contact_person}</p>*/}
            {/*            <p>Контактний телефон {item.phone}</p>*/}
            {/*            <p>*/}
            {/*                Сфера, у якій Ваша компанія може надати пропозиції до*/}
            {/*                співпраці {item.category}*/}
            {/*            </p>*/}
            {/*            <p>Короткий опис Вашої діяльності {item.description}</p>*/}
            {/*            <p>Ваші пропозиції до співпраці {item.proposal}</p>*/}
            {/*            <p>Посилання на картинку - {item.img}</p>*/}
            {/*            <br />*/}
            {/*        </div>*/}
            {/*    ))}*/}
        </div>
        <div>
          <h3>Редагування неперевірених пропозицій</h3>
            <SelectPicker
                data={categories}
                searchable={false}
                labelKey="name"
                placeholder="Вибрати"
                value={selectedCategory}
                onChange={setSelectedCategory}
            />
            {/*//TODO make component here*/}
            {proposalsList?.length > 0 &&
                proposalsList.map((item) => (
                    <div>
                        <p>Назва юридичної/фізичної особи - {item.name}</p>
                        <p>ЄДРПОУ або ІПН - {item.code}</p>
                        <p>Контактна особа * {item.contact_person}</p>
                        <p>Контактний телефон {item.phone}</p>
                        <p>
                            Сфера, у якій Ваша компанія може надати пропозиції до
                            співпраці {item.category}
                        </p>
                        <p>Короткий опис Вашої діяльності {item.description}</p>
                        <p>Ваші пропозиції до співпраці {item.proposal}</p>
                        <p>Посилання на картинку - {item.img}</p>
                        <br />
                    </div>
                ))}
        </div>
      </div>
    </div>
  );
};

export default AdminProposals;
