# Проверка повторов: Theoretische Informatik

Проверен исходный набор из 134 встроенных TI-карточек. Учтены итоговые тексты из `data/math-card-text.js`. Личные карточки и правки в браузере/облаке не входили в доступный набор.

Решения пользователя выполнены. Теперь активны **130 TI-карточек**:

| Группа | Выполненное решение |
| --- | --- |
| 1 | Обе карточки сохранены без изменений: `doc_ti_vl_20261022_041`, `doc_ti_nerode_001` |
| 2 | Оставлена новая `doc_ti_nerode_002`; старая `doc_ti_vl_20261022_042` исключена из активного набора |
| 3 | Определения и примеры объединены в `doc_ti_countability_001`; `doc_ti_intro_028` и `doc_ti_intro_029` исключены из активного набора |
| 4 | Все формулы объединены в `doc_ti_intro_067`; `doc_ti_vl_20261022_003` исключена из активного набора |

В объединённую карточку о счётности перенесены примеры N, Z, Q, R, P(R) и обозначения мощностей. В карточке Kleene-Plus сохранены объединение степеней, связь со Stern и условия включения λ.

Существующие ID оставшихся карточек, их прогресс и пользовательские тексты сохраняются. История исключённых карточек остаётся; их прогресс не переносится на другую карточку. Исходные записи исключённых карточек сохранены в коде для миграции и истории, но не входят в библиотеку и обучение.

Ниже — **архив сравнения до объединения**, а не актуальный список активных дублей.

## 1. Эквивалентность слов относительно языка

Обе карточки содержат один и тот же критерий для всех продолжений z. Новая карточка дополнительно определяет класс, объясняет разбиение и даёт пример с чётной длиной. Для компактного набора можно оставить nerode_001 и убрать vl_20261022_041. Если нужны отдельные вопросы о relation и Klasse, обе полезны.

### Rechtsununterscheidbarkeit

ID: `doc_ti_vl_20261022_041`  
Тема: Äquivalenzrelationen und Rechtskongruenz

**Вопрос:** Wann sind zwei Wörter bezüglich einer Sprache \(L\) rechtsununterscheidbar?

**Ответ:**

\[x\sim_L y\iff\forall z\in\Sigma^*:\quad (xz\in L\iff yz\in L).\]Keine gemeinsame Fortsetzung kann die Zugehörigkeit zu \(L\) unterscheiden. Die Relation \(\sim_L\) ist eine Rechtskongruenz.

### Äquivalenzklassen einer Sprache

ID: `doc_ti_nerode_001`  
Тема: Äquivalenzrelationen und Rechtskongruenz

**Вопрос:** Was ist die Äquivalenzklasse eines Wortes bezüglich einer Sprache \(L\)?

**Ответ:**

Die Klasse
\[[x]_L=\{y\in\Sigma^*\mid x\sim_L y\}\]
enthält alle Wörter, die durch keine gemeinsame Fortsetzung von \(x\) unterscheidbar sind:
\[y\in[x]_L\iff\forall z\in\Sigma^*:\ (xz\in L\iff yz\in L).\]
Die Klasse sammelt also Wörter mit demselben zukünftigen Akzeptanzverhalten. Sie kann auch Wörter außerhalb von \(L\) enthalten; die Klassen zerlegen ganz \(\Sigma^*\). Jede Klasse liegt entweder vollständig in \(L\) oder vollständig außerhalb, da auch \(z=\lambda\) geprüft wird.
Beispiel: Für \(L=\{a^{2n}\mid n\in\mathbb N_0\}\) über \(\Sigma=\{a\}\) gibt es genau zwei Klassen: Wörter gerader und Wörter ungerader Länge. So gilt \([\lambda]_L=\{\lambda,a^2,a^4,\ldots\}\) und \([a]_L=\{a,a^3,a^5,\ldots\}\).

## 2. Эквивалентность слов относительно DEA

Обе объясняют, что слова ведут в один и тот же Zustand. Новая карточка дополнительно определяет класс, учитывает достижимость и сравнивает классы автомата и языка. Для компактного набора можно оставить nerode_002 и убрать vl_20261022_042.

### DEA-induzierte Äquivalenz

ID: `doc_ti_vl_20261022_042`  
Тема: Äquivalenzrelationen und Rechtskongruenz

**Вопрос:** Wann sind Wörter bezüglich eines DEA \(M\) äquivalent?

**Ответ:**

\[x\sim_M y\iff\delta^*(s,x)=\delta^*(s,y).\]Beide Wörter führen vom Startzustand zum selben Zustand. Hier bezeichnet \(\delta^*\) die auf Wörter erweiterte Übergangsfunktion.

### Äquivalenzklassen eines DEA

ID: `doc_ti_nerode_002`  
Тема: Äquivalenzrelationen und Rechtskongruenz

**Вопрос:** Was ist die Äquivalenzklasse eines Wortes bezüglich eines DEA \(M\)?

**Ответ:**

Für \(M=(K,\Sigma,\delta,s,F)\) gilt:
\[[x]_M=\{y\in\Sigma^*\mid\delta^*(s,y)=\delta^*(s,x)\}.\]
Diese Klasse enthält genau die Wörter, die vom Startzustand aus zum selben Zustand wie \(x\) führen. Jedem erreichbaren Zustand entspricht genau eine solche Wortklasse; unerreichbare Zustände ergeben keine Wortklasse. Beispielsweise liegen \(\lambda\) und \(aa\) in derselben Klasse, wenn beide zum Startzustand führen.
Jede Klasse \([x]_M\) liegt vollständig in \([x]_{L(M)}\). Ein beliebiger DEA kann mehrere verschiedene Zustände für dasselbe zukünftige Akzeptanzverhalten besitzen. Erst im minimalen vollständigen DEA stimmen die Wortklassen bezüglich des Automaten und seiner Sprache überein.

## 3. Счётность: определения

Новая карточка повторяет оба определения и добавляет höchstens abzählbar и оговорку о терминах. Старые содержат дополнительные примеры: N, Z, Q; R и P(R), а также обозначения мощностей. Можно объединить примеры с новой карточкой и затем убрать две старые; удаление без переноса потеряет эти подробности.

### Abzählbar unendlich

ID: `doc_ti_intro_028`  
Тема: Wiederholung IT-1

**Вопрос:** Wann heißt eine Menge abzählbar unendlich?

**Ответ:**

Wenn eine Bijektion zwischen der Menge und \(\mathbb N\) existiert. Ihre Elemente lassen sich ohne Auslassungen oder Wiederholungen durchnummerieren. Die Mächtigkeit ist \(\aleph_0\). Beispiele sind \(\mathbb N\), \(\mathbb Z\) und \(\mathbb Q\).

### Überabzählbarkeit

ID: `doc_ti_intro_029`  
Тема: Wiederholung IT-1

**Вопрос:** Wann heißt eine Menge überabzählbar?

**Ответ:**

Eine Menge ist überabzählbar, wenn sie weder endlich noch abzählbar unendlich ist. Beispiel: \(\mathbb R\) mit Mächtigkeit \(2^{\aleph_0}\). Nicht jede überabzählbare Menge hat diese Mächtigkeit; etwa \(\mathcal P(\mathbb R)\) ist noch mächtiger.

### Abzählbarkeit: Begriffe

ID: `doc_ti_countability_001`  
Тема: Sprachen: Mächtigkeiten und Abzählbarkeit

**Вопрос:** Was bedeutet höchstens abzählbar, abzählbar unendlich und überabzählbar?

**Ответ:**

Eine Menge \(A\) ist höchstens abzählbar, wenn eine Injektion \(A\to\mathbb N_0\) existiert; dazu gehören auch endliche Mengen. Sie ist abzählbar unendlich, wenn eine Bijektion \(\mathbb N_0\to A\) existiert. Überabzählbar bedeutet: Es gibt keine Injektion \(A\to\mathbb N_0\). Achtung: „abzählbar“ wird je nach Konvention für höchstens abzählbar oder für abzählbar unendlich verwendet; die genaue Aussage sollte ausdrücklich genannt werden.

## 4. Kleene-Plus и связь со Stern

Повторяются L⁺ = LL* и условие λ ∈ L⁺ ⇔ λ ∈ L. У новой есть отдельная формула L* = L⁺ ∪ {λ}, у старой — определение через объединение степеней и условие для L⁺ = L* ∖ {λ}. Лучше объединить в intro_067 и затем убрать vl_20261022_003; просто удалять новую без переноса формулы не предлагаю.

### Kleene-Plus / Positive Hülle \(L^+\)

ID: `doc_ti_intro_067`  
Тема: Sprachen: Allgemeine Begriffe

**Вопрос:** Was ist \(L^+\) und wann enthält es \(\lambda\)?

**Ответ:**

\[L^+=L\cdot L^*=\bigcup_{n=1}^{\infty}L^n.\]
Die positive Hülle enthält Verkettungen von mindestens einem Wort aus \(L\). Es gilt \(\lambda\in L^+\iff\lambda\in L\). Daher ist \(L^+=L^*\setminus\{\lambda\}\) nur dann richtig, wenn \(\lambda\notin L\).

### Stern und positive Hülle

ID: `doc_ti_vl_20261022_003`  
Тема: Sprachen: Allgemeine Begriffe

**Вопрос:** Welche Beziehung besteht zwischen \(L^*\) und \(L^+\)?

**Ответ:**

\[L^*=L^+\cup\{\lambda\},\qquad L^+=LL^*.\]Dabei gilt \(\lambda\in L^+\iff\lambda\in L\). Die Vereinigung ist daher nicht immer disjunkt.

## Другие пересечения, которые я бы сохранила

| Карточки | Почему пересекаются | Почему полезно оставить |
| --- | --- | --- |
| Lineare Abbildung (`doc_ti_intro_053`) / Linearität: zusammengefasste Bedingung (`doc_ti_intro_054`) | Два способа записать линейность | Отдельные аксиомы и их компактная эквивалентная запись; можно объединить по желанию |
| Präfix und Suffix (`doc_ti_intro_061`) / Gesetze der Wortkonkatenation (`doc_ti_vl_20261022_001`) | Нейтральность λ повторяется | Первая спрашивает о частях слова, вторая — об ассоциативности и некоммутативности |
| Grenze des Pumping-Lemmas (`doc_ti_vl_20261022_032`) / Nichtregulär trotz Pumping-Eigenschaft (`doc_ti_pumping_example_001`) | Одна и та же граница применимости | Короткий теоретический ответ и подробный контрпример с доказательством |
| Äquivalente reguläre Ausdrücke (`doc_ti_extra_009`) / Äquivalenz von Automaten (`doc_ti_vl_20261022_014`) | Равенство описываемых языков | Разные объекты; у первой есть примеры неединственности записи |
| DEA-Äquivalenz verfeinert Sprachäquivalenz (`doc_ti_vl_20261022_045`) / Äquivalenzklassen eines DEA (`doc_ti_nerode_002`) | Связь классов автомата и языка | Отдельная формулировка и обоснование импликации против объяснения классов |
| Satz von Cantor / Diagonalbeweis für Potenzmengen / Alle Sprachen: Überabzählbarkeit (`doc_ti_intro_031`, `doc_ti_intro_032`, `doc_ti_countability_004`) | Теорема и диагонализация | Общий результат, его доказательство и применение к языкам |
| Mengenoperationen (`doc_ti_intro_006`, `doc_ti_intro_007`) / Mengenoperationen auf Sprachen (`doc_ti_intro_063`) | Те же операции над множествами | Применение к языкам явно фиксирует основное множество Σ* |

Не следует смешивать эквивалентность автоматов, эквивалентность состояний, эквивалентность слов относительно языка и эквивалентность слов относительно DEA: критерии и объекты различаются. Карточки про эти понятия не являются полными дублями.

Проверки: `node math-formatting.test.cjs`, `node semesters.test.cjs`, `git diff --check`.
