DROP DATABASE IF EXISTS spanish;

CREATE DATABASE IF NOT EXISTS spanish;

USE spanish;

CREATE TABLE IF NOT EXISTS conj (
  id INT NOT NULL PRIMARY KEY,
  conj_type VARCHAR(250),
  explanation VARCHAR(250)
);

CREATE TABLE IF NOT EXISTS verbs (
  id INT NOT NULL,
  word VARCHAR(100),
  ending VARCHAR(100),
  yo VARCHAR(100),
  yo_ex VARCHAR(100),
  tu VARCHAR(100),
  tu_ex VARCHAR(100),
  el VARCHAR(100),
  el_ex VARCHAR(100),
  nos VARCHAR(100),
  nos_ex VARCHAR(100),
  ellos VARCHAR(100),
  ellos_ex VARCHAR(100),
  exp_key VARCHAR(100)
);

CREATE TABLE IF NOT EXISTS endings (
  id INT NOT NULL,
  ending VARCHAR(50),
  yo VARCHAR(50),
  tu VARCHAR(50),
  el VARCHAR(50),
  nos VARCHAR(50),
  ellos VARCHAR(50),
  conj_type VARCHAR(50)
);

INSERT INTO conj (id, conj_type, explanation) values (1, 'Simple Present', 'This is what we use when we are talking about things that are happening right now');

INSERT INTO conj (id, conj_type, explanation) values (2, 'Imperfect Past', 'Used to talk about past actions or emotional states in the past that were not completed');

-- SIMPLE PRESENT:

INSERT INTO verbs (id, word, ending, yo, yo_ex, tu, tu_ex, el, el_ex, nos, nos_ex, ellos, ellos_ex, exp_key) values
(1, 'hablar - to speak', 'ar', 'Yo hablo - I speak', 'Yo hablo contigo - I speak with you', 'Tu hablas - You speak', 'Tu hablas cada dia - You speak each day',
'El habla - he speaks', 'El habla bueno - he speaks well', 'Nosotros hablamos - We speak', 'Nosotros hablamos a veces - we speak sometimes',
'Ellos hablan - they speak', 'Ellos hablan mucho - they speak a lot', 'Simple Present'
);

INSERT INTO verbs (id, word, ending, yo, yo_ex, tu, tu_ex, el, el_ex, nos, nos_ex, ellos, ellos_ex, exp_key) values
(2, 'comer - to eat', 'er', 'Yo como - I eat', 'Yo como a casa - I eat at home', 'Tu comes - You eat', 'Tu comes eso? - You eat that?',
'Ella come - She eats', 'Ella come conmigo - She eats with me', 'Nosotros comemos - We eat', 'comemos mucho aqui - we eat a lot here',
 'Ellos comen - they eat', 'Ellos nunca comen - they never eat', 'Simple Present'
);

INSERT INTO verbs (id, word, ending, yo, yo_ex, tu, tu_ex, el, el_ex, nos, nos_ex, ellos, ellos_ex, exp_key) values
(3, 'vivir - to live', 'ir', 'Yo vivo - I live', 'Vivo aqui - I live here', 'Tu vives - You live', 'vives bueno - You live well',
 'Ella vive - She lives', 'Ella vive con su hermano - She lives with her brother', 'Nosotros vivimos - We live', 'vivimos en este pueblo - we live in this village',
 'Ellos viven - they live', 'Ellas viven en los Estados Unidos - they live in the United States', 'Simple Present'
);

-- IMPERFECT PAST:

INSERT INTO verbs (id, word, ending, yo, yo_ex, tu, tu_ex, el, el_ex, nos, nos_ex, ellos, ellos_ex, exp_key) values
(4, 'comprar - to buy', 'ar', 'Yo compraba - I bought, I was buying, I used to buy', 'Yo compraba muchas cosas - I bought many things', 'Tu comprabas - You bought, you were buying, you used to buy',
'Comprabas carne - You bought meat', 'El compraba - He bought', 'El compraba pescado aqui - he bought fish here', 'Nosotros comprabamos - We bought', 'comprábamos comida para cena - we bought food for dinner',
'Ellos compraban - they bought', 'Ellos compraban huevos - they bought eggs', 'Imperfect Past'
);

INSERT INTO verbs (id, word, ending, yo, yo_ex, tu, tu_ex, el, el_ex, nos, nos_ex, ellos, ellos_ex, exp_key) values
(5, 'correr - to run', 'er', 'Yo corría - I ran', 'Yo corría cada dia - I ran each day', 'Tu corrías - You ran', 'Tu corrías con su perro - You ran with your dog',
'Ella corría - She ran', 'Ella corría conmigo - She ran with me', 'Nosotros corriamos - We ran', 'corriamos cada semana - We ran each week',
 'Ellos corrian - they ran', 'Ellos nunca corrian en escuela - They never ran in school', 'Imperfect Past'
);

INSERT INTO verbs (id, word, ending, yo, yo_ex, tu, tu_ex, el, el_ex, nos, nos_ex, ellos, ellos_ex, exp_key) values
(6, 'escribir - to write', 'ir', 'Yo escribía - I wrote', 'Yo escribía a ella - I wrote to her', 'Tu escribías - You wrote', 'escribías un libro - You wrote a book',
 'El escribía - He wrote', 'El escribía cartas- He wrote letters', 'Nosotros escribíamos - We wrote', 'Nosotros escribíamos en escuela - We wrote in school',
 'Ellos escribían - They wrote', 'Ellos escribían contigo - They wrote with you', 'Imperfect Past'
);


INSERT INTO endings (id, ending, yo, tu, el, nos, ellos, conj_type) VALUES (
  1, 'ar', 'o', 'as', 'a', 'amos', 'an', 'Simple Present'
);
INSERT INTO endings (id, ending, yo, tu, el, nos, ellos, conj_type) VALUES (
  2, 'er', 'o', 'es', 'e', 'emos', 'en', 'Simple Present'
);
INSERT INTO endings (id, ending, yo, tu, el, nos, ellos, conj_type) VALUES (
  3, 'ir', 'o', 'es', 'i', 'imos', 'en', 'Simple Present'
);

INSERT INTO endings (id, ending, yo, tu, el, nos, ellos, conj_type) VALUES (
  1, 'ar', 'aba', 'abas', 'aba', 'abamos', 'aban', 'Imperfect Past'
);
INSERT INTO endings (id, ending, yo, tu, el, nos, ellos, conj_type) VALUES (
  2, 'er', 'ía', 'ías', 'ía', 'íamos', 'ían', 'Imperfect Past'
);
INSERT INTO endings (id, ending, yo, tu, el, nos, ellos, conj_type) VALUES (
  3, 'ir', 'ía', 'ías', 'ía', 'íamos', 'ían', 'Imperfect Past'
);

