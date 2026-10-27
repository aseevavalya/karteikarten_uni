# Datenbanken: карточки по DB.pdf

Источник: предоставленный DB.pdf, Ingo Schmitt, 438 страниц, разделы 1–10. Титульная страница и общий план не превращены в отдельные вопросы.

Итого: **223 карточки** — 33 существующие с сохранёнными ID и 190 новых. **10 блоков, 46 подтем.** Все существующие карточки введения распределены по содержательным подтемам. У карточек указаны номера слайдов оригинала (например, 7–30), а не страницы прежнего Wissenskatalog.

В PDF нет дат отдельных занятий. Для библиотеки глава 1 названа Einführung, а главы 2–10 — VL 1–9. Это организационная нумерация сайта; она не утверждает, что каждый раздел преподавался за одно занятие.

| Блок | Раздел PDF | Слайды | Подтемы | Карточки |
| --- | --- | --- | ---: | ---: |
| Einführung | 1 | 1–1 … 1–40 | 7 | 42 |
| VL 1: SQL – Grundlagen | 2 | 2–1 … 2–58 | 6 | 25 |
| VL 2: Entity-Relationship-Modell | 3 | 3–1 … 3–48 | 5 | 21 |
| VL 3: Relationales Datenbankmodell | 4 | 4–1 … 4–42 | 3 | 18 |
| VL 4: Netzwerk-Datenmodell | 5 | 5–1 … 5–10 | 2 | 6 |
| VL 5: SQL – Komplexe Anfragen | 6 | 6–1 … 6–36 | 4 | 17 |
| VL 6: Datenbankentwurf und Normalisierung | 7 | 7–1 … 7–89 | 7 | 45 |
| VL 7: Datenbanksprachen | 8 | 8–1 … 8–66 | 6 | 26 |
| VL 8: SQL – Sichten und Sicherheit | 9 | 9–1 … 9–27 | 3 | 11 |
| VL 9: Query By Example | 10 | 10–1 … 10–20 | 3 | 12 |

## Принципы покрытия

Карточки охватывают определения, обозначения, ограничения, способы построения запросов и ключевые алгоритмы всех десяти разделов. Иллюстрации и последовательности одинаковых примеров сведены в содержательные вопросы, а не механически в одну карточку на слайд. Включены примеры замыкания атрибутов, ключа, минимальной оболочки FD, 3NF-синтеза, потери информации при разложении и полного примера LOTS.

SQL-код оформлен как код, математические определения — в LaTeX. Синтаксис из учебного стандарта помечен там, где поддержка зависит от DBMS. Примеры поясняют материал; это не готовая схема для импорта всей COMPANY-базы.

## Уточнения к формулировкам слайдов

- COUNT(A) игнорирует NULL, COUNT(*) считает строки. Различие проговорено явно.
- В простом SELECT с GROUP BY нельзя произвольно выводить негруппированные столбцы, но выводить все группирующие столбцы необязательно.
- HAVING в стандартном SQL возможен и без явного GROUP BY — с одной общей группой.
- Логическая обработка SELECT/DISTINCT предшествует финальному ORDER BY; она отличается от физического плана.
- Для рекурсивной достижимости использован UNION вместо UNION ALL, чтобы пример завершался и на графе с циклами.
- В дополнение к обсуждаемому на слайдах Escaping дано пояснение параметризованных запросов как способа разделить SQL-код и данные.
- Определения нормальных форм учитывают все кандидаты ключа; формальная 3NF включает допустимую правую часть — приматрибут.

## Сохранение данных и структуры

Существующие ID и учебный прогресс сохранены. Автоматически переназначается только исходная тема Einführende Begriffe у старых встроенных карточек; пользовательские тексты и переименованные темы остаются. Личные блоки сохраняются. Новые блоки добавляются однократно: переименованный или удалённый пользователем блок не восстанавливается при следующем открытии. Существующая ручная сортировка приоритетна; для нового набора задан учебный порядок.

## Проверки

- `node databases.test.cjs`: уникальность, ссылки на источник, LaTeX-разделители, полное распределение по блокам, миграция старых сохранений, личные правки, прогресс, удаление/переименование блоков, порядок и рендер библиотеки.
- `node semesters.test.cjs`: разделение семестров, сохранения, переименование предметов и существующие миграции.
- `node math-formatting.test.cjs`: математическое оформление и сохранение правок.
- 14 полных SQL-примеров выполнены в SQLite на отдельной тестовой базе, включая достижимость при наличии цикла. Это не проверка всех диалектных команд SQL.
- Проверка в реальном браузере недоступна: инструмент подключения вернул ошибку окружения; структура HTML проверена программно.

## Оглавление карточек

### Einführung

**Einführung: Grundbegriffe und Dateiverwaltung**

- Probleme traditioneller Dateiverwaltung — Welche Probleme hat die traditionelle Dateiverwaltung? (`doc_db_intro_001`)
- Programm-Daten-Abhängigkeit — Was bedeutet Programm-Daten-Abhängigkeit? (`doc_db_intro_002`)
- Datenbank (DB) — Was ist eine Datenbank? (`doc_db_intro_003`)
- Datenbank-Management-System (DBMS) — Was ist ein DBMS? Nennen Sie Beispiele. (`doc_db_intro_004`)
- Datenbanksystem (DBS) — Woraus besteht ein Datenbanksystem? (`doc_db_intro_005`)
- Weitere Nachteile der Dateiverwaltung — Welche zusätzlichen Probleme entstehen bei Dateiverwaltung ohne DBMS? (`doc_db_vl00_001`)
- Nutzen eines DBMS — Welche Vorteile bietet ein DBMS gegenüber getrennten Anwendungsdateien? (`doc_db_vl00_002`)

**Einführung: Modelle, Schemata und Sprachen**

- Datenmodell — Welche Konzepte umfasst ein Datenmodell? (`doc_db_intro_006`)
- Datenbankmodell — Was ist ein Datenbankmodell? Nennen Sie Beispiele. (`doc_db_intro_007`)
- Datenbankschema — Was beschreibt ein Datenbankschema? (`doc_db_intro_008`)
- Datenmodell, Datenbankmodell und Schema — Wie hängen Datenmodell, Datenbankmodell und Datenbankschema zusammen? (`doc_db_intro_009`)
- Datenbanksprachen — Welche vier Arten von Datenbanksprachen unterscheidet der Wissenskatalog? (`doc_db_intro_010`)
- DDL — Wozu dient die Data Definition Language (DDL)? (`doc_db_intro_011`)
- DML und QL — Wie unterscheiden sich DML und QL in der Einteilung des Wissenskatalogs? (`doc_db_intro_012`)
- DBPL — Wozu dient eine Database Programming Language (DBPL)? (`doc_db_intro_013`)
- Schema und Datenbankzustand — Wie unterscheiden sich ein Schema und ein Datenbankzustand? (`doc_db_vl00_003`)
- Entwicklung der Datenmodelle — Welche Datenmodellfamilien werden in der Einführung eingeordnet? (`doc_db_vl00_004`)

**Einführung: Nutzer und Administration**

- Datenbanknutzer — Welche drei Gruppen von Datenbanknutzern werden unterschieden? (`doc_db_intro_014`)
- Endnutzer — Wie greifen Endnutzer auf eine Datenbank zu? (`doc_db_intro_015`)
- DB-Anwendungsprogrammierer — Welche Aufgaben und Sprachen gehören zur Datenbank-Anwendungsprogrammierung? (`doc_db_intro_016`)
- Datenbankadministrator — Welche Aufgaben hat ein Datenbankadministrator? (`doc_db_intro_017`)

**Einführung: Architektur und Datenunabhängigkeit**

- 3-Ebenen-Schema-Architektur — Welche Ebenen umfasst die 3-Ebenen-Schema-Architektur? (`doc_db_intro_018`)
- Externes Schema — Was beschreibt ein externes Schema? (`doc_db_intro_019`)
- Konzeptuelles Schema — Was beschreibt das konzeptuelle Schema? (`doc_db_intro_020`)
- Internes Schema — Was beschreibt das interne Schema? (`doc_db_intro_021`)
- Physische Datenunabhängigkeit — Was bedeutet physische Datenunabhängigkeit? (`doc_db_intro_022`)
- Logische Datenunabhängigkeit — Was bedeutet logische Datenunabhängigkeit? (`doc_db_intro_023`)
- Datenunabhängigkeit: Ebenen — Zwischen welchen Ebenen liegen logische und physische Datenunabhängigkeit? (`doc_db_intro_024`)
- Nutzersichten — Was sind Nutzersichten auf eine Datenbank? (`doc_db_intro_028`)
- Anfragen über drei Schemaebenen — Wie wird eine Nutzeranfrage durch die drei Schemaebenen vermittelt? (`doc_db_vl00_006`)

**Einführung: Anforderungen an ein DBMS**

- Neun Anforderungen (Codd’sche Regeln im Katalog) — Welche neun Anforderungen führt der Wissenskatalog unter „Codd’schen Regeln“ auf? (`doc_db_intro_025`)
- Integration — Was bedeutet Integration bei der Datenverwaltung? (`doc_db_intro_026`)
- Katalog (Data Dictionary) — Was enthält der Datenbankkatalog? (`doc_db_intro_027`)
- Konsistenz und Integrität — Wie unterscheidet der Wissenskatalog Konsistenz und Integrität? (`doc_db_intro_029`)
- Zugriffskontrolle — Was gewährleistet die Zugriffskontrolle? (`doc_db_intro_030`)
- Transaktion — Was ist eine Transaktion? (`doc_db_intro_031`)
- Synchronisation — Wozu dient Synchronisation im Mehrbenutzerbetrieb? (`doc_db_intro_032`)
- Datensicherung und Wiederherstellung — Wozu dienen Datensicherung und Wiederherstellung? (`doc_db_intro_033`)

**Einführung: Relationale Beispieldatenbank**

- Relationale Darstellung in der Einführung — Wie stellt eine relationale Datenbank Daten und Zusammenhänge dar? (`doc_db_vl00_005`)

**Einführung: Systemarchitektur und Einordnung**

- Komponenten der Anfrageverarbeitung — Welche Aufgabe haben DDL-Prozessor, Anfrageprozessor, Optimierer und Laufzeitmanager? (`doc_db_vl00_007`)
- Historische Einordnung von DBMS — Welche Entwicklung und historischen Systembeispiele nennt die Vorlesung? (`doc_db_vl00_008`)
- Anwendungsgebiete von Datenbanken — Welche typischen Datenbankanwendungen nennt die Vorlesung? (`doc_db_vl00_009`)

### VL 1: SQL – Grundlagen

**SQL-Grundlagen: Beispielschema und SQL-Modell**

- COMPANY-Beispielschema — Welche Tabellen und Verknüpfungen bilden die COMPANY-Beispieldatenbank? (`doc_db_vl01_001`)
- SQL und Standardisierung — Was ist SQL, und warum garantiert der Standard keine identischen DBMS? (`doc_db_vl01_002`)
- Mengen- und Multimengensemantik in SQL — Wie unterscheiden sich SQL-Tabellen von mathematischen Relationen? (`doc_db_vl01_003`)

**SQL-Grundlagen: DDL und Integritätsbedingungen**

- CREATE TABLE — Wie definiert man eine Tabelle mit Primär- und Fremdschlüssel? (`doc_db_vl01_004`)
- NOT NULL, DEFAULT und CHECK — Was bewirken NOT NULL, DEFAULT und CHECK? (`doc_db_vl01_009`)
- PRIMARY KEY und UNIQUE — Wie unterscheiden sich PRIMARY KEY und UNIQUE? (`doc_db_vl01_010`)
- FOREIGN KEY — Wie formuliert man referentielle Integrität in SQL? (`doc_db_vl01_011`)
- Referenzaktionen — Was bedeuten CASCADE, SET NULL und SET DEFAULT bei ON DELETE beziehungsweise ON UPDATE? (`doc_db_vl01_012`)
- Referenzaktionen: Beispiel — Was geschieht beim Löschen einer Abteilung mit abhängigen Angestellten? (`doc_db_vl01_013`)
- DROP TABLE und ALTER TABLE — Was unterscheidet DROP TABLE von ALTER TABLE und DELETE? (`doc_db_vl01_014`)

**SQL-Grundlagen: Datentypen und Domänen**

- Numerische SQL-Datentypen — Welche numerischen Typen und welche Bedeutung hat DECIMAL(p,s)? (`doc_db_vl01_005`)
- Zeichen- und Bitketten — Wie unterscheiden sich CHAR(n), VARCHAR(n) und Bitketten? (`doc_db_vl01_006`)
- Datum und Zeit — Was repräsentieren DATE, TIME und TIMESTAMP? (`doc_db_vl01_007`)
- Benutzerdefinierte Domäne — Wozu dient CREATE DOMAIN? (`doc_db_vl01_008`)

**SQL-Grundlagen: Datenänderungen**

- INSERT — Wie fügt man eine Zeile ein, und warum ist eine Spaltenliste sinnvoll? (`doc_db_vl01_015`)
- DELETE — Wie löscht man bestimmte Zeilen? (`doc_db_vl01_016`)
- UPDATE — Wie ändert man Attributwerte vorhandener Zeilen? (`doc_db_vl01_017`)

**SQL-Grundlagen: SELECT und Verbünde**

- SELECT–FROM–WHERE — Welche Aufgaben haben SELECT, FROM und WHERE? (`doc_db_vl01_018`)
- Verbundbedingung — Warum braucht eine Anfrage über mehrere Tabellen eine passende Verbundbedingung? (`doc_db_vl01_019`)
- Qualifizierte Namen und Aliase — Wie löst man mehrdeutige Spaltennamen und verwendet dieselbe Tabelle mehrfach? (`doc_db_vl01_020`)
- Fehlendes WHERE und SELECT * — Was bedeuten eine fehlende WHERE-Klausel und SELECT *? (`doc_db_vl01_021`)

**SQL-Grundlagen: Mengenoperationen und Ausdrücke**

- UNION, INTERSECT und EXCEPT — Wie verknüpfen UNION, INTERSECT und EXCEPT zwei Anfrageergebnisse? (`doc_db_vl01_022`)
- LIKE — Wie funktionieren die Platzhalter von LIKE? (`doc_db_vl01_023`)
- Arithmetik, Konkatenation und BETWEEN — Wie verwendet man Berechnungen und BETWEEN in SQL? (`doc_db_vl01_024`)
- ORDER BY — Wie sortiert man ein Anfrageergebnis nach mehreren Attributen? (`doc_db_vl01_025`)

### VL 2: Entity-Relationship-Modell

**ERM: Grundlagen und Semantik**

- Zweck des ER-Modells — Wozu dient das ER-Modell, und warum ist es hier kein Datenbankmodell? (`doc_db_vl02_001`)
- Entität und Entitätenmenge — Was unterscheidet eine Entität von einer Entitätenmenge? (`doc_db_vl02_002`)
- Beziehung und Beziehungsmenge — Was ist eine Beziehung, und was ist eine Beziehungsmenge? (`doc_db_vl02_003`)
- Trägermenge und aktueller Zustand — Was bedeuten \(\mu(E)\), \(\sigma(E)\) und \(\sigma(A)\) im ER-Modell? (`doc_db_vl02_004`)

**ERM: Attribute und Schlüssel**

- Attribut und Attributwert — Was unterscheidet ein Attribut von einem Attributwert? (`doc_db_vl02_005`)
- Superschlüssel, Kandidat und Primärschlüssel — Wie unterscheiden sich Superschlüssel, Schlüsselkandidat und Primärschlüssel im ER-Modell? (`doc_db_vl02_006`)
- Schlüssel: Eindeutigkeit und Beispiel — Was bedeutet die Eindeutigkeitsbedingung eines Schlüssels? (`doc_db_vl02_007`)
- Komplexe Attribute — Welche Arten komplexer Attribute behandelt die Vorlesung? (`doc_db_vl02_008`)

**ERM: Beziehungen und Kardinalitäten**

- Arität einer Beziehung — Was bedeutet die Arität einer Beziehungsmenge? (`doc_db_vl02_009`)
- Zerlegung n-ärer Beziehungen — Warum darf man eine ternäre Beziehung nicht immer durch drei binäre Beziehungen ersetzen? (`doc_db_vl02_010`)
- Rekursive Beziehung und Rollen — Was ist eine rekursive Beziehung, und wozu dienen Rollennamen? (`doc_db_vl02_011`)
- Kardinalitäten 1:1, 1:n und m:n — Welche Einschränkungen drücken 1:1, 1:n und m:n aus? (`doc_db_vl02_012`)
- Min-Max-Kardinalität — Wie liest man eine (min,max)-Angabe mit Partizipationssemantik? (`doc_db_vl02_013`)
- Kardinalitäten: Beispiel — Was bedeutet Professor (1,1) — works_for — Department (1,*)? (`doc_db_vl02_014`)
- Beziehungsattribut verschieben — Wann kann ein Beziehungsattribut in eine Entitätenmenge verschoben werden? (`doc_db_vl02_015`)

**ERM: Schwache Entitäten**

- Schwache Entitätenmenge — Was ist eine schwache Entitätenmenge? (`doc_db_vl02_016`)
- Schwache Entität: Buchkopie — Warum ist eine Buchkopie ein Beispiel für eine schwache Entität? (`doc_db_vl02_017`)

**ERM: Spezialisierung und Entwurf**

- Spezialisierung — Was bedeutet Spezialisierung einer Entitätenmenge? (`doc_db_vl02_018`)
- Disjunkt oder überlappend — Was unterscheidet disjunkte von überlappender Spezialisierung? (`doc_db_vl02_019`)
- Total oder partiell — Was unterscheidet totale von partieller Spezialisierung? (`doc_db_vl02_020`)
- Vollständiger konzeptueller Entwurf — Was gehört außer dem ER-Diagramm zu einem vollständigen konzeptuellen Entwurf? (`doc_db_vl02_021`)

### VL 3: Relationales Datenbankmodell

**Relationenmodell: Grundlagen und Relationen**

- Relationenmodell: Grundidee — Was ist die Grundidee des Relationenmodells? (`doc_db_vl03_001`)
- Wertebereich und dom — Was sind ein Wertebereich und die Funktion dom? (`doc_db_vl03_002`)
- Relationenschema und Relation — Wie unterscheidet man Relationenschema und Relation formal? (`doc_db_vl03_003`)
- Grad, Kardinalität und Tupelzugriff — Was bedeuten Grad, Kardinalität, t[A] und t[X]? (`doc_db_vl03_004`)
- Eigenschaften einer Relation — Welche Ordnung und welche Duplikate sind in einer Relation erlaubt? (`doc_db_vl03_005`)

**Relationenmodell: Schlüssel und Integrität**

- NULL im relationalen Kontext — Wofür steht NULL, und was ist es nicht? (`doc_db_vl03_006`)
- Relationale Schlüsselbedingungen — Wie definiert man Schlüssel im Relationenmodell? (`doc_db_vl03_007`)
- Schlüssel: Alternativen — Können Schlüsselkandidaten unterschiedlich viele Attribute haben? (`doc_db_vl03_008`)
- Entitätsintegrität und Datenbankschema — Was besagen Entitätsintegrität und die Gültigkeit eines relationalen Datenbankzustands? (`doc_db_vl03_009`)
- Referentielle Integrität: formal — Wie definiert man referentielle Integrität eines Fremdschlüssels? (`doc_db_vl03_010`)

**Relationenmodell: Änderungen und ER-Transformation**

- Integrität bei Änderungen — Was muss bei Insert, Delete, Update und Retrieval beachtet werden? (`doc_db_vl03_011`)
- Starke Entität in Relation überführen — Wie wird eine starke Entitätenmenge in das Relationenmodell übersetzt? (`doc_db_vl03_012`)
- Schwache Entität in Relation überführen — Wie wird eine schwache Entitätenmenge relational abgebildet? (`doc_db_vl03_013`)
- Funktionale Beziehung relational abbilden — Wie bildet man eine funktionale Beziehung ohne eigene Beziehungstabelle ab? (`doc_db_vl03_014`)
- Allgemeine Beziehung relational abbilden — Wie bildet man eine m:n- oder allgemeine n-äre Beziehung ab? (`doc_db_vl03_015`)
- Strukturierte und mehrwertige Attribute abbilden — Wie übersetzt man strukturierte und mehrwertige ER-Attribute? (`doc_db_vl03_016`)
- Abgeleitete und obligatorische Attribute abbilden — Wie behandelt man abgeleitete und nicht-optionale ER-Attribute? (`doc_db_vl03_017`)
- Spezialisierung relational abbilden — Welche Abbildung der Spezialisierung verwendet die Vorlesung? (`doc_db_vl03_018`)

### VL 4: Netzwerk-Datenmodell

**Netzwerkmodell: Konzepte und Darstellung**

- CODASYL-Netzwerkmodell — Was kennzeichnet das Netzwerk-Datenmodell der Vorlesung? (`doc_db_vl04_001`)
- ERM, RM und Netzwerkmodell vergleichen — Wie entsprechen sich die Grundbegriffe von ER-, relationalem und Netzwerkmodell? (`doc_db_vl04_002`)
- Bachman-Diagramm — Wie liest man ein Netzwerkschema als Bachman-Diagramm? (`doc_db_vl04_003`)
- m:n im Netzwerkmodell — Wie wird eine m:n-Beziehung im Netzwerkmodell umgesetzt? (`doc_db_vl04_004`)

**Netzwerkmodell: Navigation und Grenzen**

- Navigation und System-Record — Wie erfolgt der Zugriff auf eine Netzwerkdatenbank? (`doc_db_vl04_005`)
- Grenzen des Netzwerkmodells — Welche Einschränkungen betont die Vorlesung am Netzwerkmodell? (`doc_db_vl04_006`)

### VL 5: SQL – Komplexe Anfragen

**SQL-Komplex: Unteranfragen und Mengenvergleiche**

- Unteranfrage und IN — Wie funktioniert IN mit einer Unteranfrage? (`doc_db_vl05_001`)
- ANY, SOME und ALL — Was bedeuten Vergleichsoperator ANY, SOME und ALL? (`doc_db_vl05_002`)
- EXISTS und korrelierte Unteranfrage — Was prüft EXISTS, und wann heißt eine Unteranfrage korreliert? (`doc_db_vl05_003`)
- UNIQUE-Prädikat — Was prüft UNIQUE bei einer Unteranfrage in der Vorlesung? (`doc_db_vl05_004`)
- Explizite Werteliste — Wie prüft man Zugehörigkeit zu einer festen Werteliste? (`doc_db_vl05_005`)

**SQL-Komplex: NULL und dreiwertige Logik**

- TRUE, FALSE und UNKNOWN — Warum verwendet SQL dreiwertige Logik? (`doc_db_vl05_006`)
- Dreiwertige Verknüpfungen — Welche wichtigen Regeln gelten für UNKNOWN? (`doc_db_vl05_007`)
- NULL-Falle bei NOT IN — Warum kann NOT IN mit einer Unteranfrage unerwartet keine Zeilen liefern? (`doc_db_vl05_008`)

**SQL-Komplex: JOIN und Umbenennung**

- Expliziter JOIN und Spaltenalias — Wie formuliert man einen inneren JOIN und benennt die Ausgabe um? (`doc_db_vl05_009`)
- NATURAL JOIN — Wie bestimmt NATURAL JOIN die Verbundattribute? (`doc_db_vl05_010`)
- Äußerer JOIN — Wie unterscheiden sich LEFT, RIGHT und FULL OUTER JOIN vom INNER JOIN? (`doc_db_vl05_011`)

**SQL-Komplex: Aggregation und Gruppierung**

- Aggregatfunktionen — Welche Aggregatfunktionen behandelt SQL, und wie verhalten sie sich bei NULL? (`doc_db_vl05_012`)
- COUNT-Varianten — Was unterscheidet COUNT(*), COUNT(A) und COUNT(DISTINCT A)? (`doc_db_vl05_013`)
- GROUP BY — Wie bildet GROUP BY Gruppen, und was darf SELECT ausgeben? (`doc_db_vl05_014`)
- WHERE und HAVING — Wie unterscheiden sich WHERE und HAVING? (`doc_db_vl05_015`)
- INSERT mit SELECT — Wie fügt man ein Anfrageergebnis in eine Tabelle ein? (`doc_db_vl05_016`)
- Logische SQL-Auswertungsreihenfolge — In welcher logischen Reihenfolge versteht man einen SELECT-Block? (`doc_db_vl05_017`)

### VL 6: Datenbankentwurf und Normalisierung

**Entwurf: Entwurfsprozess**

- Lebenszyklus einer Datenbankanwendung — Welche Phasen umfasst der Lebenszyklus einer Datenbankanwendung? (`doc_db_vl06_001`)
- Ziele und Hauptphasen des Entwurfs — Welche Ziele und Hauptphasen hat der Datenbankentwurf? (`doc_db_vl06_002`)
- Anforderungsanalyse — Wie gewinnt und prüft man Datenbankanforderungen? (`doc_db_vl06_003`)
- Konzeptueller Entwurf und Sichtenintegration — Wie unterscheiden sich zentraler Entwurf und Sichtenintegration? (`doc_db_vl06_004`)
- Logischer und physischer Entwurf — Was unterscheidet logischen Entwurf, physischen Entwurf und Tuning? (`doc_db_vl06_005`)

**Entwurf: Funktionale Abhängigkeiten**

- Funktionale Abhängigkeit — Was bedeutet eine funktionale Abhängigkeit \(X\to Y\)? (`doc_db_vl06_006`)
- FD prüfen: Beispiel — Wie erkennt man eine Verletzung von \(\mathrm{PNUMBER}\to\mathrm{PLOCATION}\)? (`doc_db_vl06_007`)
- FD und Superschlüssel — Wie erkennt man einen Superschlüssel mithilfe funktionaler Abhängigkeiten? (`doc_db_vl06_008`)
- FD-Abschluss und Äquivalenz — Was bedeuten \(F^+\), logische Folgerung und äquivalente FD-Mengen? (`doc_db_vl06_009`)
- Armstrong-Axiome — Wie lauten die Armstrong-Axiome? (`doc_db_vl06_010`)
- Weitere FD-Regeln — Welche Regeln folgen aus den Armstrong-Axiomen? (`doc_db_vl06_011`)

**Entwurf: Attributabschluss und Schlüssel**

- Attributabschluss — Was ist \(X_F^+\), und wie berechnet man ihn? (`doc_db_vl06_012`)
- Attributabschluss: Rechenbeispiel — Berechnen Sie \(A_F^+\) für \(R(A,B,C,D)\) und \(F=\{A\to B,B\to C\}\). (`doc_db_vl06_013`)
- Einen Kandidatenschlüssel finden — Wie findet man einen Kandidatenschlüssel mithilfe des Attributabschlusses? (`doc_db_vl06_014`)
- Schlüssel: Synthesebeispiel — Welcher Schlüssel ergibt sich für \(R(A,B,C,D,E,F)\) mit \(A\to C\), \(A\to D\), \(BC\to E\)? (`doc_db_vl06_015`)

**Entwurf: Zerlegung und Anomalien**

- Normalisierung und Anomalien — Wozu normalisiert man ein Datenbankschema? (`doc_db_vl06_016`)
- Drei Änderungsanomalien — Was sind Einfüge-, Lösch- und Änderungsanomalien? (`doc_db_vl06_017`)
- Verbundtreue und Verlustfreiheit — Wann ist eine Zerlegung verlustfrei beziehungsweise verbundtreu? (`doc_db_vl06_018`)
- Binärer Verlustfreiheitstest — Wie testet man eine binäre Zerlegung unter funktionalen Abhängigkeiten? (`doc_db_vl06_019`)
- Verlustfreiheit: Gegenbeispiel — Warum ist die Zerlegung von R(A,B,C) in AB und BC bei \(F=\{A\to B,C\to B\}\) nicht verlustfrei? (`doc_db_vl06_020`)
- Abhängigkeitstreue — Wann ist eine Zerlegung abhängigkeitstreu? (`doc_db_vl06_021`)
- Abhängigkeitstreue: Beispiel — Welche Zerlegung erhält \(F=\{A\to BCD,D\to B\}\) besser: AB/ACD oder ABD/AC? (`doc_db_vl06_022`)

**Entwurf: Normalformen 1NF bis BCNF**

- Erste Normalform — Wann ist ein Schema in 1NF, und wie beseitigt man eine Wertemenge in einer Zelle? (`doc_db_vl06_023`)
- Prim- und Nichtprimattribut — Was ist ein Primattribut beziehungsweise Nichtprimattribut? (`doc_db_vl06_024`)
- Zweite Normalform — Wann ist ein Schema in 2NF? (`doc_db_vl06_025`)
- 2NF: Projektmitarbeit normalisieren — Wie normalisiert man EMP_PROJ(SSN, PNUMBER, HOURS, ENAME, PNAME, PLOCATION)? (`doc_db_vl06_026`)
- Dritte Normalform — Wann ist ein Schema in 3NF? (`doc_db_vl06_027`)
- 3NF: Abteilungsdaten auslagern — Warum zerlegt man EMP_DEPT(SSN, ENAME, DNUMBER, DNAME, DMGRSSN)? (`doc_db_vl06_028`)
- Boyce-Codd-Normalform — Wann ist ein Schema in BCNF, und wie unterscheidet sie sich von 3NF? (`doc_db_vl06_029`)
- BCNF und Verlust von Abhängigkeitstreue — Warum kann eine BCNF-Zerlegung Bedingungen verlieren? (`doc_db_vl06_030`)
- BCNF ohne Abhängigkeitsverlust — Kann eine BCNF-Zerlegung auch abhängigkeitstreu sein? (`doc_db_vl06_031`)
- LOTS: Normalisierung von 1NF bis BCNF — Wie zerlegt das LOTS-Beispiel der Vorlesung ein Schema schrittweise bis BCNF? (`doc_db_vl06_045`)

**Entwurf: Mehrwertige Abhängigkeiten und 4NF**

- Mehrwertige Abhängigkeit — Was bedeutet \(X\twoheadrightarrow Y\)? (`doc_db_vl06_032`)
- MVD formal und als Beispiel — Welche Tupel fordert eine MVD auf R(X,Y,Z)? (`doc_db_vl06_033`)
- Triviale MVD und FD — Wann ist eine MVD trivial, und wie hängen FD und MVD zusammen? (`doc_db_vl06_034`)
- Inferenzregeln für MVD — Welche weiteren MVD-Regeln nennt die Vorlesung? (`doc_db_vl06_035`)
- Koaleszenz — Was besagt die Koaleszenzregel für MVD und FD? (`doc_db_vl06_036`)
- Vierte Normalform und Zerlegung — Wann ist ein Schema in 4NF, und wie zerlegt man eine Verletzung? (`doc_db_vl06_037`)
- 4NF: Buchbeispiel — Wie beseitigt man unabhängige Autoren-, Versions- und Stichwortkombinationen? (`doc_db_vl06_038`)

**Entwurf: Synthese und Gesamtüberblick**

- Normalformhierarchie — Welche Implikationen und Garantien gelten zwischen den Normalformen? (`doc_db_vl06_039`)
- 3NF-Synthesealgorithmus — Welche Schritte hat der 3NF-Synthesealgorithmus? (`doc_db_vl06_040`)
- Synthese: vollständiges Rechenbeispiel — Was liefert die Synthese für \(R(A,B,C,D,E,F)\) und \(G=\{A\to C,A\to D,BC\to E\}\)? (`doc_db_vl06_041`)
- Minimale Überdeckung — Welche drei Bedingungen erfüllt eine minimale Überdeckung? (`doc_db_vl06_042`)
- Minimale Überdeckung berechnen — Wie reduziert man eine FD-Menge auf eine minimale Überdeckung? (`doc_db_vl06_043`)
- Minimale Überdeckung: Beispiel — Reduzieren Sie \(F=\{A\to CD,AB\to C,BC\to E,AB\to E\}\). (`doc_db_vl06_044`)

### VL 7: Datenbanksprachen

**DB-Sprachen: Arten von Anfragesprachen**

- Prozedural und deklarativ — Was unterscheidet prozedurale von deklarativen Anfragesprachen? (`doc_db_vl07_001`)
- Anforderungen an Anfragesprachen — Welche Anforderungen nennt die Vorlesung an Anfragesprachen? (`doc_db_vl07_002`)

**DB-Sprachen: Relationale Algebra: Grundoperationen**

- Selektion — Wie ist die Selektion \(\sigma_F(r)\) definiert? (`doc_db_vl07_003`)
- Projektion — Wie ist die Projektion \(\pi_X(r)\) definiert? (`doc_db_vl07_004`)
- Selektion und Projektion unterscheiden — Was verändert Selektion, was Projektion? (`doc_db_vl07_005`)
- Umbenennung — Wozu dient \(\rho_{S(B_1,\ldots,B_n)}(r)\)? (`doc_db_vl07_006`)
- Vereinigungskompatibilität — Wann sind Relationen für Vereinigung, Schnitt oder Differenz kompatibel? (`doc_db_vl07_007`)
- Mengenoperationen auf Relationen — Wie sind Vereinigung, Schnitt und Differenz von Relationen definiert? (`doc_db_vl07_008`)
- Kartesisches Produkt — Was liefert das kartesische Produkt zweier Relationen? (`doc_db_vl07_009`)

**DB-Sprachen: Relationale Algebra: Verbünde**

- Theta-Join und Equijoin — Wie hängen Theta-Join, Selektion und Produkt zusammen? (`doc_db_vl07_010`)
- Natürlicher Verbund — Was ist der natürliche Verbund zweier Relationen? (`doc_db_vl07_011`)
- Gesetze des natürlichen Verbunds — Welche algebraischen Eigenschaften hat der natürliche Verbund? (`doc_db_vl07_012`)
- Algebra: Anfrage formulieren — Wie erhält man die Namen der Mitarbeitenden der Research-Abteilung in relationaler Algebra? (`doc_db_vl07_013`)

**DB-Sprachen: Relationale Algebra: Erweiterungen**

- Division — Welche Frage beantwortet relationale Division? (`doc_db_vl07_014`)
- Division aus Grundoperationen — Wie lässt sich Division mit Projektion, Produkt und Differenz ausdrücken? (`doc_db_vl07_015`)
- Gruppierung in der erweiterten Algebra — Was ergänzt Gruppierung mit Aggregation zur relationalen Algebra? (`doc_db_vl07_016`)
- Äußerer Verbund in der Algebra — Wozu benötigt man einen äußeren Verbund? (`doc_db_vl07_017`)

**DB-Sprachen: Relationaler Kalkül**

- Tupel- und Bereichskalkül — Wie unterscheiden sich relationaler Tupel- und Bereichskalkül? (`doc_db_vl07_018`)
- Tupelkalkül: Ausdruck und Atome — Wie liest man einen Tupelkalkülausdruck? (`doc_db_vl07_019`)
- Freie und gebundene Variablen — Welche Rolle spielen Quantoren im Tupelkalkül? (`doc_db_vl07_020`)
- Nicht-Existenz und Allquantor — Wie formuliert man „kein zugehöriges Tupel existiert“ korrekt? (`doc_db_vl07_021`)
- Unsichere Ausdrücke — Warum ist \(\{t\mid\neg\mathrm{EMPLOYEE}(t)\}\) problematisch? (`doc_db_vl07_022`)
- Syntaktische Sicherheit — Wie beschränkt man quantifizierte Variablen syntaktisch sicher? (`doc_db_vl07_023`)

**DB-Sprachen: Ausdrucksmächtigkeit und Rekursion**

- Relationale Vollständigkeit — Was bedeutet relationale Vollständigkeit einer Anfragesprache? (`doc_db_vl07_024`)
- Transitive Hülle — Warum benötigt die allgemeine transitive Hülle Rekursion? (`doc_db_vl07_025`)
- Rekursive SQL-Anfrage — Wie berechnet man erreichbare Städte mit einer rekursiven SQL-Anfrage? (`doc_db_vl07_026`)

### VL 8: SQL – Sichten und Sicherheit

**Sichten und Sicherheit: SQL-Sichten**

- CREATE VIEW und DROP VIEW — Wie erzeugt und entfernt man eine SQL-Sicht? (`doc_db_vl08_001`)
- Aggregationssicht — Wie definiert man eine Sicht mit benannten Aggregatspalten? (`doc_db_vl08_002`)
- View-Update-Problem — Was ist das View-Update-Problem? (`doc_db_vl08_003`)
- Aktualisierbare Sicht — Welche einfache aktualisierbare Sicht behandelt die Vorlesung? (`doc_db_vl08_004`)
- WITH CHECK OPTION — Wozu dient WITH CHECK OPTION bei einer Auswahlsicht? (`doc_db_vl08_005`)

**Sichten und Sicherheit: Privilegien und Autorisierung**

- Account- und Objektprivilegien — Welche Ebenen von Berechtigungen unterscheidet die Vorlesung? (`doc_db_vl08_006`)
- GRANT und WITH GRANT OPTION — Wie vergibt man Rechte, und was erlaubt WITH GRANT OPTION? (`doc_db_vl08_007`)
- Rechte über eine benutzerspezifische Sicht — Wie können Sichten den sichtbaren Datenbereich einschränken? (`doc_db_vl08_008`)
- REVOKE, RESTRICT und CASCADE — Wie nimmt man Rechte zurück, und was geschieht mit weitergegebenen Rechten? (`doc_db_vl08_009`)

**Sichten und Sicherheit: SQL-Injektion**

- SQL-Injektion: Ursache und Beispiel — Wie entsteht SQL-Injektion? (`doc_db_vl08_010`)
- SQL-Code und Eingabedaten trennen — Wie verhindert man, dass Nutzereingaben als SQL-Code wirken? (`doc_db_vl08_011`)

### VL 9: Query By Example

**QBE: Anfragegerüste und Variablen**

- Grundidee von QBE — Was bedeutet Query By Example, und wie stellt man eine Anfrage? (`doc_db_vl09_001`)
- P. und Beispielelemente — Was bedeuten P., _x und leere Felder in QBE? (`doc_db_vl09_002`)
- Verbund und Self-Join in QBE — Wie drückt QBE einen Verbund oder Self-Join aus? (`doc_db_vl09_003`)

**QBE: Bedingungen, Ausgabe und Aggregation**

- Condition Box — Wozu dient die Condition Box in QBE? (`doc_db_vl09_004`)
- Eigene Ausgabetabelle — Wann verwendet man eine temporäre Ausgabetabelle in QBE? (`doc_db_vl09_005`)
- Negierte Zeile — Was bedeutet eine negierte Zeile in QBE? (`doc_db_vl09_006`)
- Sortierung in QBE — Wie wird eine mehrstufige Sortierung in der gezeigten QBE-Notation angegeben? (`doc_db_vl09_007`)
- Aggregation in QBE — Wie liest man P.SUM.ALL. und P.CNT.UN.ALL.? (`doc_db_vl09_008`)

**QBE: Formale Semantik und Änderungen**

- QBE und Bereichskalkül — Wie wird eine QBE-Anfrage formal interpretiert? (`doc_db_vl09_009`)
- Ausdrucksfähigkeit von QBE — Ist eine einzelne QBE-Anfrage im behandelten Modell relational vollständig? (`doc_db_vl09_010`)
- I., D. und U. — Wie stellt QBE Einfügen, Löschen und Ändern dar? (`doc_db_vl09_011`)
- Einfügen aus einer anderen Relation — Wie fügt man in QBE Daten aus einer Quelltabelle ein? (`doc_db_vl09_012`)
