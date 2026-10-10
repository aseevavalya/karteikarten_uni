// Built-in card data. Personal edits and progress are saved by the application.
const MATH_CARD_TEXT = {
  "doc_aup_006": {
    "definition": "Floyd–Warshall berechnet kürzeste Wege zwischen allen Knotenpaaren. In Schritt \\(k\\) darf der Knoten \\(k\\) zusätzlich als Zwischenknoten verwendet werden:\n\\[d^{(k)}_{ij}=\\min\\left(d^{(k-1)}_{ij},\\ d^{(k-1)}_{ik}+d^{(k-1)}_{kj}\\right).\\]\nDie Laufzeit ist \\(\\Theta(|V|^3)\\)."
  },
  "doc_aup_008": {
    "definition": "Warshall berechnet die transitive Hülle bzw. Erreichbarkeit in einem gerichteten Graphen. Die boolesche Update-Regel lautet:\n\\[r^{(k)}_{ij}=r^{(k-1)}_{ij}\\lor\\left(r^{(k-1)}_{ik}\\land r^{(k-1)}_{kj}\\right).\\]"
  },
  "doc_aup_012": {
    "question": "Was bedeutet eine Laufzeit von \\(O(g(n))\\)?",
    "definition": "\\(f(n)\\in O(g(n))\\) bedeutet, dass \\(f(n)\\) ab einer hinreichend großen Eingabe durch ein konstantes Vielfaches von \\(g(n)\\) nach oben beschränkt ist. Sie beschreibt eine asymptotische obere Wachstumsschranke."
  },
  "doc_aup_013": {
    "definition": "Ein Aufwandsmaß ordnet jeder Eingabe eine natürliche Größe zu, an der die Zahl der Elementaroperationen beschrieben wird, etwa \\(n=|\\mathrm{xs}|\\) oder \\(k=\\min(|\\mathrm{xs}|,|\\mathrm{ys}|)\\). Es muss zu jedem Rekursionsschritt passen."
  },
  "doc_aup_015": {
    "definition": "Eine Maßfunktion bildet Argumente auf eine wohlfundierte Menge, meist \\(\\mathbb N\\), ab und muss bei jedem rekursiven Aufruf strikt abnehmen. Zusammen mit Basisfällen folgt Terminierung."
  },
  "doc_aup_017": {
    "definition": "Für wiederholt linear sinkende Kosten gilt:\n\\[1+2+\\cdots+n=\\frac{n(n+1)}2=\\Theta(n^2).\\]\nDiese Formel erklärt viele quadratische Rekurrenzen."
  },
  "doc_aup_023": {
    "definition": "foldl verarbeitet eine Liste von links nach rechts und führt dabei einen Akkumulator weiter:\n\\[\\operatorname{foldl}\\ f\\ z\\ [x_1,\\ldots,x_n]=f\\bigl(\\cdots f(f(z,x_1),x_2)\\cdots,x_n\\bigr).\\]\nHier bezeichnet \\(f(a,b)\\) die Anwendung der in Haskell kurrierten Funktion auf beide Argumente."
  },
  "doc_aup_024": {
    "definition": "foldr faltet eine Liste von rechts:\n\\[\\operatorname{foldr}\\ f\\ z\\ [x_1,\\ldots,x_n]=f\\bigl(x_1,f(x_2,\\ldots,f(x_n,z)\\ldots)\\bigr).\\]\nEs kann auch mit unendlichen Listen arbeiten, wenn \\(f\\) sein zweites Argument nicht sofort benötigt. Die Schreibweise \\(f(a,b)\\) steht hier für die Anwendung auf beide Argumente."
  },
  "doc_aup_039": {
    "question": "Warum ist der Worst Case der BST-Suche \\(O(n)\\)?"
  },
  "doc_aup_042": {
    "definition": "Der Balancefaktor ist die Differenz der Höhen der Teilbäume, beispielsweise:\n\\[\\operatorname{BF}(v)=h(\\text{linker Teilbaum})-h(\\text{rechter Teilbaum}).\\]\nBei einem AVL-Baum gilt für jeden Knoten \\(\\operatorname{BF}(v)\\in\\{-1,0,1\\}\\)."
  },
  "doc_aup_043": {
    "definition": "Ein AVL-Baum ist ein binärer Suchbaum, bei dem sich an jedem Knoten die Höhen des linken und rechten Teilbaums um höchstens eins unterscheiden. Dadurch bleibt seine Höhe in \\(O(\\log n)\\)."
  },
  "doc_aup_047": {
    "definition": "Nach dem normalen BST-Löschen werden auf dem Weg zur Wurzel Höhen beziehungsweise Balancefaktoren aktualisiert. Bei \\(|\\operatorname{BF}|>1\\) wird durch passende einfache oder doppelte Rotation rebalanciert."
  },
  "doc_aup_048": {
    "definition": "Ein Graph \\(G=(V,E)\\) besteht aus einer Knotenmenge V und einer Kantenmenge E. Kanten verbinden Knoten; sie können gerichtet oder ungerichtet und gewichtet oder ungewichtet sein."
  },
  "doc_aup_055": {
    "term": "Distanz \\(\\operatorname{dist}(v)\\)",
    "question": "Was zählt \\(\\operatorname{dist}(v)\\) bei BFS?",
    "definition": "Bei BFS ist \\(\\operatorname{dist}(v)\\) die minimale Anzahl von Kanten auf einem Weg vom Startknoten zu v. Für den Startknoten gilt \\(\\operatorname{dist}(s)=0\\)."
  },
  "doc_aup_063": {
    "definition": "Beim doppelten Hashing erzeugen zwei Hashfunktionen die Sondierungsfolge:\n\\[g_i(k)=\\bigl(h_1(k)+i\\,h_2(k)\\bigr)\\bmod m.\\]\nDie zweite Funktion bestimmt die Schrittweite.",
    "question": "Welche Rolle besitzt \\(h_2\\) beim doppelten Hashing?"
  },
  "doc_aup_065": {
    "definition": "Bei offener Adressierung darf ein gelöschter Platz nicht sofort wie ein nie belegter Platz behandelt werden; ein Löschmarker erhält die Sondierkette. Der Lastfaktor \\(\\alpha=\\frac nm\\) beschreibt den Belegungsgrad."
  },
  "doc_aup_069": {
    "definition": "HeapSort baut einen Max-Heap auf, vertauscht wiederholt die Wurzel mit dem letzten Element des aktiven Bereichs und stellt danach die Heap-Eigenschaft wieder her. Die Laufzeit ist \\(\\Theta(n\\log n)\\)."
  },
  "doc_aup_071": {
    "definition": "Ein DAG ist ein gerichteter azyklischer Graph. Eine topologische Sortierung ordnet seine Knoten so, dass für jede Kante \\(u\\to v\\) der Knoten u vor v erscheint."
  },
  "doc_aup_072": {
    "question": "Warum ist die Laufzeit von MergeSort auch im Best Case \\(\\Theta(n\\log n)\\)?",
    "definition": "MergeSort zerlegt eine Liste rekursiv in möglichst gleich große Teillisten, sortiert beide Teile und führt sie mit merge zusammen. Es besitzt ungefähr \\(\\lceil\\log_2 n\\rceil\\) Zerlegungsebenen, verarbeitet pro Merge-Ebene insgesamt \\(\\Theta(n)\\) Elemente und läuft daher auch im besten Fall in \\(\\Theta(n\\log n)\\); die Listenimplementierung benötigt zusätzlichen Speicher \\(\\Theta(n)\\)."
  },
  "doc_aup_073": {
    "definition": "QuickSort wählt ein Pivotelement, zerlegt die Eingabe in Elemente kleiner/gleich und größer als das Pivot, sortiert die Teillisten rekursiv und fügt sie zusammen. Durchschnittlich benötigt es \\(\\Theta(n\\log n)\\), im ungünstigen Fall \\(\\Theta(n^2)\\)."
  },
  "doc_aup_077": {
    "definition": "InsertionSort baut schrittweise einen sortierten Präfix auf und fügt jedes neue Element an der passenden Stelle ein. Best Case \\(\\Theta(n)\\), Average/Worst \\(\\Theta(n^2)\\)."
  },
  "doc_aup_078": {
    "definition": "SelectionSort wählt wiederholt das kleinste beziehungsweise größte Element des unsortierten Bereichs und setzt es an die nächste Endposition. Die Zahl der Vergleiche bleibt auch bei vorsortierter Eingabe \\(\\Theta(n^2)\\)."
  },
  "doc_dt_003": {
    "question": "Was beschreibt \\(\\sum m(\\ldots)\\)?"
  },
  "doc_dt_004": {
    "question": "Was beschreibt \\(\\prod M(\\ldots)\\)?"
  },
  "doc_dt_008": {
    "definition": "Die Negation einer Konjunktion ist die Disjunktion der negierten Operanden und umgekehrt:\n\\[\\begin{aligned}\\neg(a\\land b)&=\\neg a\\lor\\neg b,\\\\\\neg(a\\lor b)&=\\neg a\\land\\neg b.\\end{aligned}\\]"
  },
  "doc_dt_009": {
    "definition": "Eine boolesche Funktion kann bezüglich \\(x\\) zerlegt werden:\n\\[f=(\\neg x\\land f|_{x=0})\\lor(x\\land f|_{x=1}).\\]\nDie beiden Teilfunktionen \\(f|_{x=0}\\) und \\(f|_{x=1}\\) heißen Kofaktoren."
  },
  "doc_dt_022": {
    "definition": "Ein Komparator vergleicht zwei Binärwörter und erzeugt Signale für \\(A<B\\), \\(A=B\\) und \\(A>B\\)."
  },
  "doc_dt_027": {
    "definition": "Beim NOR-SR-Latch sind die Eingänge aktiv-high: \\(S=1\\) setzt \\(Q=1\\), \\(R=1\\) setzt \\(Q=0\\), \\(S=R=0\\) speichert; \\(S=R=1\\) ist verboten."
  },
  "doc_dt_028": {
    "definition": "Beim NAND-SR-Latch sind die Eingänge aktiv-low: \\(\\overline S=0\\) setzt, \\(\\overline R=0\\) rücksetzt, \\(\\overline S=\\overline R=1\\) speichert; \\(\\overline S=\\overline R=0\\) ist verboten."
  },
  "doc_dt_030": {
    "definition": "Ein transparent-high D-Latch übernimmt während \\(C=1\\) fortlaufend den Wert D. Bei \\(C=0\\) hält es den zuletzt übernommenen Zustand."
  },
  "doc_dt_039": {
    "definition": "Die aktive Taktflanke ist der Signalübergang, bei dem ein flankengesteuertes Speicherelement den Eingang übernimmt, etwa \\(0\\to1\\) bei positiver Flankensteuerung."
  },
  "doc_dt_040": {
    "definition": "Die Setup-Zeit ist die Mindestzeit vor der aktiven Taktflanke, während der der Eingang des empfangenden Flip-Flops stabil sein muss. Ohne Clock Skew gilt: \\(t_{\\mathrm{clk}\\to Q,\\max}+t_{\\mathrm{comb},\\max}\\le T-t_{\\mathrm{setup}}\\). Es werden die maximalen Verzögerungen betrachtet."
  },
  "doc_dt_041": {
    "definition": "Die Hold-Zeit ist die Mindestzeit nach der aktiven Taktflanke, während der der Eingang des empfangenden Flip-Flops weiterhin stabil bleiben muss. Ohne Clock Skew gilt: \\(t_{\\mathrm{clk}\\to Q,\\min}+t_{\\mathrm{comb},\\min}\\ge t_{\\mathrm{hold}}\\). Es werden die minimalen Verzögerungen betrachtet."
  },
  "doc_dt_042": {
    "question": "Was bedeutet \\(t_{\\mathrm{clk}\\to Q}\\)?"
  },
  "doc_dt_043": {
    "definition": "Die maximale Propagationsverzögerung \\(t_{\\mathrm{pd},\\max}\\) ist die längste Zeit, die eine Änderung benötigt, um durch eine kombinatorische Schaltung bis zum Ausgang zu wirken."
  },
  "doc_dt_044": {
    "definition": "Die minimale Verzögerung \\(t_{\\mathrm{cd},\\min}\\) ist die früheste Zeit, nach der sich der Ausgang einer kombinatorischen Schaltung infolge einer Eingangsänderung verändern kann."
  },
  "doc_dt_046": {
    "definition": "Die Taktperiode T ist die Zeit zwischen zwei gleichartigen Taktflanken. Die Taktfrequenz ist \\(f=\\frac1T\\)."
  },
  "doc_dt_064": {
    "definition": "Typisch: \\(\\mathrm{MAR}\\gets\\mathrm{PC}\\), Speicher lesen, \\(\\mathrm{MBR}\\gets M[\\mathrm{MAR}]\\), \\(\\mathrm{IR}\\gets\\mathrm{MBR}\\) und \\(\\mathrm{PC}\\gets\\mathrm{PC}+\\text{Instruktionslänge}\\). Die konkrete Parallelisierung hängt vom Datenpfad ab."
  },
  "doc_dt_065": {
    "definition": "Ein Halbaddierer addiert zwei einzelne Bits A und B ohne eingehenden Übertrag. Es gilt \\(S=A\\oplus B\\) für das Summenbit und \\(C=A\\land B\\) für den Übertrag."
  },
  "doc_dt_066": {
    "definition": "Ein Volladdierer addiert die drei Bits \\(A\\), \\(B\\) und \\(C_{\\mathrm{in}}\\). Es gilt:\n\\[\\begin{aligned}S&=A\\oplus B\\oplus C_{\\mathrm{in}},\\\\C_{\\mathrm{out}}&=(A\\land B)\\lor(A\\land C_{\\mathrm{in}})\\lor(B\\land C_{\\mathrm{in}}).\\end{aligned}\\]\nEr kann aus zwei Halbaddierern und einem OR-Gatter aufgebaut werden."
  },
  "doc_dt_067": {
    "definition": "Ein Ripple-Carry-Addierer besteht aus hintereinandergeschalteten Volladdierern. Der Übertrag jeder Stelle wird als \\(C_{\\mathrm{in}}\\) an die nächste Stelle weitergegeben, weshalb sich der Übertrag im ungünstigsten Fall durch alle Stufen ausbreiten muss."
  },
  "doc_dt_069": {
    "definition": "Carry-Out ist der Übertrag aus der höchstwertigen Stelle. Bei vorzeichenloser Addition zeigt \\(C_{\\mathrm{out}}=1\\), dass das Ergebnis für die gegebene Bitbreite zu groß ist."
  },
  "doc_dt_077": {
    "definition": "MIPS bezeichnet Millionen ausgeführter Instruktionen pro Sekunde. Bei Taktfrequenz f und mittlerem CPI gilt \\(\\mathrm{MIPS}=\\frac f{\\mathrm{CPI}\\cdot10^6}\\), sofern f in Hertz eingesetzt wird."
  },
  "doc_dt_082": {
    "definition": "Die Ausführungszeit ist\n\\[t=\\frac{\\text{Instruktionsanzahl}\\cdot\\text{mittlerer CPI}}{\\text{Taktfrequenz}}=\\frac{\\text{Taktzyklen}}f.\\]\nSchneller wird ein Programm durch weniger Instruktionen, kleineren CPI oder höhere Taktfrequenz."
  },
  "doc_dm_002": {
    "definition": "Für Aussagen \\(A\\) und \\(B\\) gelten:\n• Konjunktion \\(A\\land B\\): wahr genau dann, wenn beide Aussagen wahr sind.\n• Disjunktion \\(A\\lor B\\): falsch genau dann, wenn beide Aussagen falsch sind.\n• Implikation \\(A\\implies B\\): falsch genau dann, wenn \\(A\\) wahr und \\(B\\) falsch ist.\n• Äquivalenz \\(A\\iff B\\): wahr genau dann, wenn beide Wahrheitswerte gleich sind.\n• Ausschließende Disjunktion \\(A\\oplus B\\): wahr genau dann, wenn die Wahrheitswerte verschieden sind.\n• Negation \\(\\neg A\\) (auch \\(\\overline A\\)): wahr genau dann, wenn \\(A\\) falsch ist."
  },
  "doc_dm_003": {
    "definition": "Ein Prädikat auf einer Menge \\(X\\) ist eine Abbildung \\(P:X\\to\\{\\mathrm{falsch},\\mathrm{wahr}\\}\\). Es ordnet jedem Element einen Wahrheitswert zu."
  },
  "doc_dm_004": {
    "definition": "Für ein Prädikat \\(P\\) auf \\(X\\) gilt:\n• Allquantor: \\(\\forall x\\in X:\\ P(x)\\) bedeutet, dass die Bedingung für alle Elemente gilt.\n• Existenzquantor: \\(\\exists x\\in X:\\ P(x)\\) bedeutet, dass die Bedingung für mindestens ein Element gilt."
  },
  "doc_dm_005": {
    "definition": "Eine Menge \\(X\\) ist durch die eindeutige Angabe ihrer Elemente bestimmt. Man schreibt \\(x\\in X\\), wenn \\(x\\) ein Element von \\(X\\) ist, und \\(x\\notin X\\), wenn es kein Element ist."
  },
  "doc_dm_006": {
    "definition": "\\(A\\subseteq B\\) bedeutet, dass jedes Element von \\(A\\) auch in \\(B\\) liegt:\n\\[\\forall x:\\quad x\\in A\\implies x\\in B.\\]\nDie Relation \\(\\subseteq\\) heißt Inklusion."
  },
  "doc_dm_007": {
    "definition": "Man zeigt beide Inklusionen:\n\\[A=B\\iff (A\\subseteq B\\land B\\subseteq A).\\]\nDann enthalten beide Mengen genau dieselben Elemente."
  },
  "doc_dm_008": {
    "definition": "\\(\\varnothing\\) ist die Menge ohne Elemente. Es gilt \\(|\\varnothing|=0\\) und \\(\\varnothing\\subseteq A\\) für jede Menge \\(A\\). Dagegen enthält \\(\\{\\varnothing\\}\\) genau ein Element."
  },
  "doc_dm_009": {
    "definition": "Die Potenzmenge enthält alle Teilmengen von \\(X\\):\n\\[\\mathcal P(X)=2^X=\\{A\\mid A\\subseteq X\\}.\\]\nFür endliches \\(X\\) gilt \\(|\\mathcal P(X)|=2^{|X|}\\). Beispiel: \\(\\mathcal P(\\{a\\})=\\{\\varnothing,\\{a\\}\\}\\)."
  },
  "doc_dm_010": {
    "definition": "\\[\\begin{aligned}A\\cap B&=\\{x\\mid x\\in A\\land x\\in B\\},\\\\A\\cup B&=\\{x\\mid x\\in A\\lor x\\in B\\},\\\\A\\setminus B&=\\{x\\mid x\\in A\\land x\\notin B\\},\\\\A\\mathbin{\\triangle}B&=(A\\setminus B)\\cup(B\\setminus A).\\end{aligned}\\]\nDies sind Durchschnitt, Vereinigung, Differenz und symmetrische Differenz."
  },
  "doc_dm_011": {
    "definition": "\\(A\\) und \\(B\\) sind disjunkt, wenn \\(A\\cap B=\\varnothing\\). Ihre Vereinigung heißt dann disjunkte Vereinigung und wird als \\(A\\mathbin{\\dot\\cup}B\\) geschrieben."
  },
  "doc_dm_012": {
    "definition": "Eine Mengenfamilie \\((A_i)_{i\\in I}\\) ist eine Abbildung \\(A:I\\to\\mathcal P(X)\\) mit \\(A_i=A(i)\\). Es gilt:\n\\[\\begin{aligned}\\bigcap_{i\\in I}A_i&=\\{x\\in X\\mid\\forall i\\in I:\\ x\\in A_i\\},\\\\\\bigcup_{i\\in I}A_i&=\\{x\\in X\\mid\\exists i\\in I:\\ x\\in A_i\\}.\\end{aligned}\\]"
  },
  "doc_dm_013": {
    "definition": "\\(X\\) ist leer oder es existiert für ein \\(n\\ge1\\) eine Bijektion \\(\\{1,\\ldots,n\\}\\to X\\). Dann ist \\(|X|=n\\) die Anzahl ihrer Elemente; \\(|\\varnothing|=0\\)."
  },
  "doc_dm_014": {
    "definition": "Für eine endliche Menge \\(X=\\{x_1,\\ldots,x_n\\}\\) und \\(f:X\\to\\mathbb R\\) definiert man:\n\\[\\sum_{x\\in X}f(x)=f(x_1)+\\cdots+f(x_n),\\]\n\\[\\prod_{x\\in X}f(x)=f(x_1)\\cdots f(x_n).\\]\nDie leere Summe ist \\(0\\), das leere Produkt ist \\(1\\). Die einzelnen Werte heißen Summanden bzw. Faktoren."
  },
  "doc_dm_015": {
    "definition": "Geordnete Paare sind komponentenweise gleich: \\((a,b)=(c,d)\\) genau dann, wenn \\(a=c\\) und \\(b=d\\). Das kartesische Produkt ist\n\\[A\\times B=\\{(a,b)\\mid a\\in A,\\ b\\in B\\}.\\]"
  },
  "doc_dm_016": {
    "definition": "Ein \\(n\\)-Tupel \\((x_1,\\ldots,x_n)\\) ist eine geordnete Folge von \\(n\\) Komponenten:\n\\[X_1\\times\\cdots\\times X_n=\\{(x_1,\\ldots,x_n)\\mid x_i\\in X_i\\text{ für }1\\le i\\le n\\}.\\]\n\\(X^n\\) bezeichnet das \\(n\\)-fache kartesische Produkt von \\(X\\) mit sich selbst."
  },
  "doc_dm_017": {
    "definition": "Eine Abbildung \\(f:X\\to Y\\) ordnet jedem \\(x\\in X\\) genau ein Element \\(f(x)\\in Y\\) zu. \\(X\\) ist der Definitionsbereich und \\(Y\\) die Zielmenge (im Katalog „Wertebereich“). Das Bild \\(f(X)\\) kann eine echte Teilmenge von \\(Y\\) sein."
  },
  "doc_dm_018": {
    "definition": "Für \\(f:X\\to Y\\), \\(A\\subseteq X\\) und \\(B\\subseteq Y\\) gilt:\n\\[\\begin{aligned}f(A)&=\\{f(x)\\mid x\\in A\\},\\\\f^{-1}(B)&=\\{x\\in X\\mid f(x)\\in B\\}.\\end{aligned}\\]\nDies sind Bild und Urbild. Ein Urbild ist auch ohne Umkehrabbildung definiert."
  },
  "doc_dm_019": {
    "definition": "Eine Abbildung \\(f:X\\to Y\\) heißt:\n• Injektiv, wenn \\(f(x_1)=f(x_2)\\implies x_1=x_2\\) für alle \\(x_1,x_2\\in X\\).\n• Surjektiv, wenn \\(\\forall y\\in Y\\ \\exists x\\in X:\\ f(x)=y\\).\n• Bijektiv, wenn sie injektiv und surjektiv ist."
  },
  "doc_dm_020": {
    "definition": "Genau dann, wenn \\(f:X\\to Y\\) bijektiv ist. Die Umkehrabbildung \\(f^{-1}:Y\\to X\\) ordnet jedem \\(y\\) das eindeutige \\(x\\) mit \\(f(x)=y\\) zu. Es gilt:\n\\[f^{-1}\\circ f=\\operatorname{id}_X,\\qquad f\\circ f^{-1}=\\operatorname{id}_Y.\\]"
  },
  "doc_dm_021": {
    "definition": "Für \\(f:X\\to Y\\) und \\(g:Y\\to Z\\) ist die Komposition \\(g\\circ f:X\\to Z\\) definiert durch\n\\[(g\\circ f)(x)=g(f(x)).\\]\nZuerst wird \\(f\\), danach \\(g\\) angewendet."
  },
  "doc_dm_022": {
    "definition": "Die identische Abbildung auf \\(X\\) ist\n\\[\\operatorname{id}_X:X\\to X,\\qquad \\operatorname{id}_X(x)=x.\\]\nSie lässt jedes Element unverändert."
  },
  "doc_dm_023": {
    "definition": "Eine Funktion ist injektiv, wenn \\(f(x_1)=f(x_2)\\) stets \\(x_1=x_2\\) erzwingt. Ein Gegenbeispiel besteht aus zwei verschiedenen Argumenten mit demselben Bild."
  },
  "doc_dm_024": {
    "definition": "Für jedes \\(y\\) in der Zielmenge muss ein \\(x\\) im Definitionsbereich mit \\(f(x)=y\\) existieren. Die angegebene Zielmenge ist entscheidend."
  },
  "doc_dm_025": {
    "definition": "Eine Relation \\(R\\) ist eine Teilmenge von \\(X\\times Y\\). Für \\((x,y)\\in R\\) schreibt man auch \\(xRy\\). Bei \\(X=Y\\) spricht man von einer Relation auf \\(X\\)."
  },
  "doc_dm_026": {
    "definition": "Eine Relation \\(\\sim\\) auf \\(X\\) heißt Äquivalenzrelation, wenn sie reflexiv, symmetrisch und transitiv ist:\n\\[\\begin{aligned}x&\\sim x,\\\\x\\sim y&\\implies y\\sim x,\\\\(x\\sim y\\land y\\sim z)&\\implies x\\sim z.\\end{aligned}\\]\nDie Äquivalenzklasse von \\(x\\) ist \\([x]_{\\sim}=\\{y\\in X\\mid x\\sim y\\}\\). Die Quotientenmenge \\(X/{\\sim}=\\{[x]_{\\sim}\\mid x\\in X\\}\\) bildet eine Partition von \\(X\\)."
  },
  "doc_dm_027": {
    "definition": "Eine Relation \\(\\preceq\\) auf \\(X\\) ist eine partielle Ordnung, wenn sie reflexiv, antisymmetrisch und transitiv ist. Das Paar \\((X,\\preceq)\\) heißt Poset oder partiell geordnete Menge."
  },
  "doc_dm_028": {
    "definition": "Eine partielle Ordnung \\(\\preceq\\) ist total, wenn alle Elemente vergleichbar sind:\n\\[\\forall a,b\\in X:\\quad a\\preceq b\\lor b\\preceq a.\\]"
  },
  "doc_dm_029": {
    "definition": "Eine \\(k\\)-stellige Relation zwischen Mengen \\(X_1,\\ldots,X_k\\) ist eine Teilmenge \\(R\\subseteq X_1\\times\\cdots\\times X_k\\). Für gleiche Grundmengen ist dies eine Relation \\(R\\subseteq X^k\\) auf \\(X\\)."
  },
  "doc_dm_030": {
    "definition": "Nein. Die Gleichheitsrelation ist beispielsweise sowohl symmetrisch als auch antisymmetrisch. Antisymmetrie verbietet nur beidseitige Beziehungen zwischen verschiedenen Elementen."
  },
  "doc_dm_031": {
    "definition": "Eine Äquivalenzrelation ist reflexiv, symmetrisch und transitiv."
  },
  "doc_dm_032": {
    "definition": "Eine partielle Ordnung \\(\\preceq\\) auf \\(X\\) ist reflexiv, antisymmetrisch und transitiv. Das Paar \\((X,\\preceq)\\) heißt partiell geordnete Menge oder Poset. Nicht alle Elemente müssen vergleichbar sein."
  },
  "doc_dm_033": {
    "definition": "Für \\(f,g:\\mathbb N\\to\\mathbb R\\) bedeutet \\(f\\in O(g)\\):\n\\[\\exists c>0\\ \\exists n_0\\in\\mathbb N\\ \\forall n\\ge n_0:\\quad |f(n)|\\le c|g(n)|.\\]\nDies ist eine asymptotische obere Schranke."
  },
  "doc_dm_034": {
    "definition": "Für \\(f,g:\\mathbb N\\to\\mathbb R\\) bedeutet \\(f\\in \\Omega(g)\\):\n\\[\\exists c>0\\ \\exists n_0\\in\\mathbb N\\ \\forall n\\ge n_0:\\quad |f(n)|\\ge c|g(n)|.\\]\nDies ist eine asymptotische untere Schranke.",
    "term": "\\(\\Omega\\)-Notation (asymptotische untere Schranke)",
    "question": "Definieren Sie: \\(\\Omega\\)-Notation (asymptotische untere Schranke)."
  },
  "doc_dm_035": {
    "definition": "\\(f\\in\\Theta(g)\\) bedeutet, dass \\(f\\in O(g)\\) und \\(f\\in\\Omega(g)\\) gelten. Äquivalent existieren Konstanten \\(c_1,c_2>0\\) und \\(n_0\\in\\mathbb N\\) mit\n\\[c_1|g(n)|\\le|f(n)|\\le c_2|g(n)|\\qquad(n\\ge n_0).\\]\nBeide Funktionen haben bis auf konstante Faktoren dieselbe asymptotische Größenordnung.",
    "term": "\\(\\Theta\\)-Notation (asymptotisch gleiche Größenordnung)",
    "question": "Definieren Sie: \\(\\Theta\\)-Notation (asymptotisch gleiche Größenordnung)."
  },
  "doc_dm_036": {
    "definition": "Für \\(f,g:\\mathbb N\\to\\mathbb R\\) bedeutet \\(f\\in o(g)\\):\n\\[\\forall c>0\\ \\exists n_0\\in\\mathbb N\\ \\forall n\\ge n_0:\\quad |f(n)|\\le c|g(n)|.\\]\nDie Bedingung gilt für jede noch so kleine positive Konstante."
  },
  "doc_dm_037": {
    "definition": "Für \\(f,g:\\mathbb N\\to\\mathbb R\\) bedeutet \\(f\\in \\omega(g)\\):\n\\[\\forall c>0\\ \\exists n_0\\in\\mathbb N\\ \\forall n\\ge n_0:\\quad |f(n)|\\ge c|g(n)|.\\]\nDie Bedingung gilt für jede noch so große positive Konstante.",
    "term": "\\(\\omega\\)-Notation (strikte untere Schranke)",
    "question": "Definieren Sie: \\(\\omega\\)-Notation (strikte untere Schranke)."
  },
  "doc_dm_038": {
    "definition": "Für \\(n\\in\\mathbb N_0\\) ist die Fakultät\n\\[n!=\\prod_{i=1}^n i.\\]\nInsbesondere gilt \\(0!=1!=1\\)."
  },
  "doc_dm_039": {
    "definition": "Die fallende Faktorielle von \\(n\\) der Länge \\(k\\) ist\n\\[n^{\\underline{k}}=n(n-1)\\cdots(n-k+1).\\]\nEs gilt \\(n^{\\underline0}=1\\) und \\(n^{\\underline k}=0\\) für \\(k>n\\), wenn \\(n,k\\in\\mathbb N_0\\)."
  },
  "doc_dm_040": {
    "definition": "\\(\\operatorname{Inj}(X,Y)\\) bezeichnet die Menge aller injektiven Abbildungen von \\(X\\) nach \\(Y\\). \\(\\operatorname{Bij}(X,Y)\\) bezeichnet entsprechend die Menge aller bijektiven Abbildungen."
  },
  "doc_dm_041": {
    "definition": "Für endliche Mengen \\(A_1,\\ldots,A_n\\) gilt:\n\\[|A_1\\times\\cdots\\times A_n|=\\prod_{i=1}^n|A_i|.\\]"
  },
  "doc_dm_042": {
    "definition": "Für endliche Mengen \\(X,Y\\) gilt:\n\\[|Y^X|=|Y|^{|X|}.\\]\nFür \\(X=Y=\\varnothing\\) setzt man hier \\(0^0=1\\), da genau eine leere Abbildung existiert."
  },
  "doc_dm_043": {
    "definition": "Für endliche Mengen \\(X,Y\\) gilt:\n\\[|\\operatorname{Inj}(X,Y)|=|Y|^{\\underline{|X|}}.\\]\nDies ist eine fallende Faktorielle. Für \\(|X|>|Y|\\) ist die Anzahl \\(0\\)."
  },
  "doc_dm_044": {
    "definition": "Sind \\(X,Y\\) endlich und \\(n=|X|=|Y|\\), dann gilt:\n\\[|\\operatorname{Bij}(X,Y)|=n!.\\]\nInsbesondere besitzt eine \\(n\\)-elementige Menge genau \\(n!\\) Permutationen."
  },
  "doc_dm_047": {
    "definition": "Die Menge aller \\(k\\)-elementigen Teilmengen von \\(X\\) wird geschrieben als\n\\[\\binom Xk=\\{A\\subseteq X\\mid |A|=k\\}.\\]"
  },
  "doc_dm_048": {
    "definition": "Für \\(0\\le k\\le n\\) ist der Binomialkoeffizient\n\\[\\binom nk=\\frac{n^{\\underline k}}{k!}=\\frac{n!}{k!(n-k)!}.\\]\nFür \\(k>n\\) gilt \\(\\binom nk=0\\). Man liest „n über k“."
  },
  "doc_dm_049": {
    "definition": "Für eine endliche Menge \\(X\\) und \\(k\\in\\mathbb N_0\\) gilt:\n\\[\\left|\\binom Xk\\right|=\\binom{|X|}{k}.\\]"
  },
  "doc_dm_050": {
    "definition": "Für jede endliche Menge \\(X\\) gilt:\n\\[|\\mathcal P(X)|=|2^X|=2^{|X|}.\\]"
  },
  "doc_dm_051": {
    "definition": "Für \\(0\\le k\\le n\\) gilt die Symmetrie:\n\\[\\binom nk=\\binom n{n-k}.\\]\nDie Auswahl einer Teilmenge entspricht eindeutig der Auswahl ihres Komplements."
  },
  "doc_dm_052": {
    "definition": "Für \\(A\\subseteq X\\) ist die charakteristische Funktion \\(\\mathbf1_A:X\\to\\mathbb R\\) gegeben durch\n\\[\\mathbf1_A(x)=\\begin{cases}1,&x\\in A,\\\\0,&x\\notin A.\\end{cases}\\]"
  },
  "doc_dm_053": {
    "definition": "Für endliche Mengen \\(A_1,\\ldots,A_n\\) gilt:\n\\[\\left|\\bigcup_{i=1}^n A_i\\right|=\\sum_{\\varnothing\\ne I\\subseteq\\{1,\\ldots,n\\}}(-1)^{|I|+1}\\left|\\bigcap_{i\\in I}A_i\\right|.\\]\nFür zwei Mengen: \\(|A\\cup B|=|A|+|B|-|A\\cap B|\\)."
  },
  "doc_dm_054": {
    "definition": "Eine Multimenge \\(M\\) über \\(X\\) wird durch ihre Vielfachheitsabbildung \\(\\mu_M:X\\to\\mathbb N_0\\) beschrieben. Es gilt:\n\\[|M|=\\sum_{x\\in X}\\mu_M(x),\\qquad\\operatorname{supp}(M)=\\{x\\in X\\mid\\mu_M(x)>0\\}.\\]\nZwei Multimengen sind gleich, wenn ihre Vielfachheitsabbildungen übereinstimmen."
  },
  "doc_dm_055": {
    "definition": "Eine \\(k\\)-elementige Multimenge über \\(X\\) hat ihre Elemente in \\(X\\) und erfüllt\n\\[\\sum_{x\\in X}\\mu_M(x)=k.\\]\nWiederholungen werden mitgezählt; die Reihenfolge spielt keine Rolle."
  },
  "doc_dm_056": {
    "definition": "Für \\(n\\ge1\\) und \\(k\\ge0\\) ist der Multimengen-Binomialkoeffizient\n\\[\\left(\\!\\!\\binom nk\\!\\!\\right)=\\binom{n+k-1}{k}=\\frac{n^{\\overline k}}{k!},\\]\nmit der steigenden Faktoriellen \\(n^{\\overline k}=n(n+1)\\cdots(n+k-1)\\) und \\(n^{\\overline0}=1\\). Für eine leere Grundmenge gibt es nur die leere Multimenge."
  },
  "doc_dm_057": {
    "definition": "Über einer Grundmenge mit \\(n\\ge1\\) Elementen gibt es genau\n\\[\\binom{n+k-1}{k}\\]\nMultimengen der Größe \\(k\\). Bei Stars and Bars werden \\(k\\) Sterne und \\(n-1\\) Trennstriche angeordnet. Über der leeren Grundmenge gibt es nur die leere Multimenge."
  },
  "doc_dm_058": {
    "definition": "Die Teileranzahlfunktion \\(t:\\mathbb N\\to\\mathbb N\\) zählt die positiven Teiler:\n\\[t(n)=|\\{j\\in\\mathbb N\\mid j\\mid n\\}|.\\]"
  },
  "doc_dm_059": {
    "definition": "Die durchschnittliche Teileranzahl der Zahlen von \\(1\\) bis \\(n\\) ist\n\\[\\overline t(n)=\\frac1n\\sum_{j=1}^n t(j).\\]"
  },
  "doc_dm_060": {
    "definition": "Die \\(n\\)-te harmonische Zahl ist\n\\[H_n=\\sum_{i=1}^n\\frac1i=1+\\frac12+\\cdots+\\frac1n.\\]"
  },
  "doc_dm_061": {
    "definition": "Auf- und Abrunden sind Abbildungen \\(\\mathbb R\\to\\mathbb Z\\):\n\\[\\begin{aligned}\\lceil x\\rceil&=\\min\\{k\\in\\mathbb Z\\mid x\\le k\\},\\\\\\lfloor x\\rfloor&=\\max\\{k\\in\\mathbb Z\\mid k\\le x\\}.\\end{aligned}\\]"
  },
  "doc_dm_062": {
    "definition": "Für alle \\(n\\in\\mathbb N\\) gilt:\n\\[H_n-1\\le\\overline t(n)\\le H_n.\\]"
  },
  "doc_dm_063": {
    "definition": "Sind \\(X,Y\\) endliche Mengen mit \\(|X|>|Y|>0\\), dann ist keine Abbildung \\(f:X\\to Y\\) injektiv. Es gibt verschiedene \\(x',x''\\in X\\) mit \\(f(x')=f(x'')\\)."
  },
  "doc_dm_064": {
    "definition": "Für \\(m,n\\in\\mathbb N\\) besitzt jede Folge von \\(mn+1\\) paarweise verschiedenen reellen Zahlen eine streng ansteigende Teilfolge der Länge \\(m+1\\) oder eine streng absteigende Teilfolge der Länge \\(n+1\\)."
  },
  "doc_dm_065": {
    "definition": "Ein Digraph ist ein Paar \\(D=(V,A)\\) mit endlicher Knotenmenge \\(V\\) und gerichteter Kantenmenge \\(A\\subseteq V\\times V\\). Eine Kante \\((a,b)\\in A\\) führt vom Startknoten \\(a\\) zum Endknoten \\(b\\) und ist zu beiden inzident. Eine Kante \\((a,a)\\) heißt Schlinge."
  },
  "doc_dm_066": {
    "definition": "Im Digraphen \\(D=(V,A)\\) sind Ausgangs- und Eingangsgrad eines Knotens \\(v\\):\n\\[\\deg^+(v)=|\\{u\\in V\\mid(v,u)\\in A\\}|,\\]\n\\[\\deg^-(v)=|\\{u\\in V\\mid(u,v)\\in A\\}|.\\]"
  },
  "doc_dm_067": {
    "definition": "\\(D'=(V',A')\\) ist ein Teilgraph von \\(D=(V,A)\\), wenn \\(V'\\subseteq V\\) und \\(A'\\subseteq A\\). Für \\(W\\subseteq V\\) ist der induzierte Teilgraph\n\\[D[W]=(W,\\{(a,b)\\in A\\mid a,b\\in W\\}).\\]\nEr enthält alle Kanten zwischen den gewählten Knoten."
  },
  "doc_dm_068": {
    "definition": "Ein \\((a,b)\\)-Pfad der Länge \\(k\\) ist ein Tupel \\((v_0,\\ldots,v_k)\\) mit \\(v_0=a\\), \\(v_k=b\\) und \\((v_i,v_{i+1})\\in A\\) für \\(0\\le i<k\\).\n• Ein Weg hat paarweise verschiedene Knoten.\n• Ein Teilpfad ist ein zusammenhängender Ausschnitt \\((v_i,\\ldots,v_j)\\).\n• Ein Zyklus ist ein Pfad mit \\(v_0=v_k\\).\n• Ein Kreis ist ein Zyklus, bei dem \\(v_0,\\ldots,v_{k-1}\\) paarweise verschieden sind.\nZyklische Verschiebungen beschreiben denselben Zyklus. Eine Kante gehört zu einem Pfad, wenn sie zwei aufeinanderfolgende Knoten verbindet. Ein Digraph ohne Zyklen heißt azyklisch."
  },
  "doc_dm_069": {
    "definition": "Ein einfacher ungerichteter Graph ist \\(G=(V,E)\\) mit endlicher Knotenmenge \\(V\\) und\n\\[E\\subseteq\\binom V2=\\{\\{a,b\\}\\mid a,b\\in V,\\ a\\ne b\\}.\\]\nDie Kanten sind ungeordnete Paare. Für \\(\\{a,b\\}\\in E\\) heißen \\(a,b\\) benachbart; die Kante ist zu beiden Endknoten inzident."
  },
  "doc_dm_070": {
    "definition": "Der Grad eines Knotens \\(a\\) ist die Anzahl seiner Nachbarn:\n\\[\\deg(a)=|\\{b\\in V\\mid\\{a,b\\}\\in E\\}|.\\]\nDie Begriffe Teilgraph, Pfad und Kreis werden analog zum gerichteten Fall verwendet. Ein ungerichteter Graph ohne Kreise heißt Wald."
  },
  "doc_dm_071": {
    "definition": "Ein Graph \\(G=(V,E)\\) heißt zusammenhängend, wenn zwischen je zwei Knoten ein Pfad existiert. Ein Wald ist ein Graph ohne Kreise; ein zusammenhängender Wald heißt Baum. Erreichbarkeit ist eine Äquivalenzrelation auf \\(V\\); ihre Klassen heißen Zusammenhangskomponenten. Jede Komponente eines Waldes ist ein Baum."
  },
  "doc_dm_072": {
    "definition": "Der einem schleifenfreien Digraphen \\(D=(V,A)\\) zugrundeliegende ungerichtete Graph ist \\(G=(V,E)\\) mit\n\\[E=\\{\\{u,v\\}\\mid(u,v)\\in A\\}.\\]\nDabei vergisst man die Kantenrichtungen. Eine Orientierung eines ungerichteten Graphen entsteht durch die Wahl einer Richtung für jede Kante."
  },
  "doc_dm_073": {
    "definition": "Für einen Graphen \\(G=(V,E)\\) gilt:\n• Vollständig: \\(E=\\binom V2\\); bei \\(n\\) Knoten heißt er \\(K_n\\).\n• Leer: \\(E=\\varnothing\\); bei \\(n\\) Knoten heißt er \\(\\overline{K_n}\\).\n• Bipartit: \\(V=A\\mathbin{\\dot\\cup}B\\), und jede Kante verbindet die beiden Partitionsklassen.\n• Vollständig bipartit: Jede mögliche Kante zwischen den Klassen ist vorhanden. Bei Klassengrößen \\(r,s\\) heißt der Graph \\(K_{r,s}\\) und hat \\(r+s\\) Knoten.\n• Regulär: Alle Knoten haben denselben Grad.\n• Planar: Der Graph lässt sich in der Ebene so zeichnen, dass sich Kanten nur in gemeinsamen Endknoten treffen."
  },
  "doc_dm_074": {
    "definition": "Ein Digraph \\(D=(V,A)\\) heißt gerichteter bzw. gewurzelter Baum mit Wurzel \\(w\\in V\\), wenn sein zugrundeliegender Graph ein Baum ist und\n\\[\\deg^-(w)=0,\\qquad\\deg^-(v)=1\\quad(v\\in V\\setminus\\{w\\}).\\]"
  },
  "doc_dm_075": {
    "definition": "Ein gerichteter Wald ist eine disjunkte Vereinigung gerichteter Bäume. Die Knotenmenge zerfällt in Teile \\(V_1,\\ldots,V_t\\), jeder induzierte Teilgraph \\(D[V_i]\\) ist ein gerichteter Baum, und zwischen verschiedenen Teilen gibt es keine Kanten."
  },
  "doc_dm_076": {
    "definition": "In einem gerichteten Baum oder Wald ist \\(v\\) ein Nachfahre von \\(u\\) und \\(u\\) ein Vorfahre von \\(v\\), wenn ein \\((u,v)\\)-Pfad existiert. Gilt \\((u,v)\\in A\\), dann ist \\(v\\) ein Kind von \\(u\\) und \\(u\\) der Elternknoten von \\(v\\)."
  },
  "doc_dm_077": {
    "definition": "Die Kantenliste eines Digraphen \\(D=(V,A)\\) ist eine Liste seiner Kanten."
  },
  "doc_dm_078": {
    "definition": "Die Adjazenzliste von \\(D=(V,A)\\) speichert zu jedem Knoten \\(u\\in V\\) die Liste aller Knoten \\(v\\) mit \\((u,v)\\in A\\). Der Speicherbedarf ist\n\\[\\Theta(|V|+|A|).\\]"
  },
  "doc_dm_079": {
    "definition": "Eine Matrix mit \\(m\\) Zeilen, \\(n\\) Spalten und Einträgen in \\(K\\) ist eine Abbildung\n\\[M:\\{1,\\ldots,m\\}\\times\\{1,\\ldots,n\\}\\to K.\\]\nMan schreibt \\(M=(m_{ij})\\in K^{m\\times n}\\). Der Eintrag \\(m_{ij}\\) steht in Zeile \\(i\\) und Spalte \\(j\\)."
  },
  "doc_dm_080": {
    "definition": "Für \\(V=\\{v_1,\\ldots,v_n\\}\\) ist die Adjazenzmatrix von \\(D=(V,A)\\) die Matrix \\(M\\in\\mathbb R^{n\\times n}\\) mit\n\\[m_{ij}=\\begin{cases}1,&(v_i,v_j)\\in A,\\\\0,&\\text{sonst}.\\end{cases}\\]\nDer Speicherbedarf ist \\(\\Theta(|V|^2)\\)."
  },
  "doc_dm_081": {
    "definition": "Für einen schleifenfreien Digraphen mit \\(n\\) Knoten und \\(m\\) Kanten ist die Inzidenzmatrix \\(B\\in\\mathbb R^{n\\times m}\\) definiert durch\n\\[b_{ij}=\\begin{cases}1,&v_i\\text{ ist Startknoten von }a_j,\\\\-1,&v_i\\text{ ist Endknoten von }a_j,\\\\0,&\\text{sonst}.\\end{cases}\\]\nIm ungerichteten Fall ist der Eintrag \\(1\\) für beide Endknoten und sonst \\(0\\). Der Speicherbedarf ist \\(\\Theta(|V|\\cdot|A|)\\)."
  },
  "doc_dm_083": {
    "definition": "Die Distanz \\(\\delta(u,v)\\) ist die minimale Länge eines \\((u,v)\\)-Pfades. Existiert kein solcher Pfad, setzt man \\(\\delta(u,v)=\\infty\\). Für ungerichtete Graphen gilt \\(\\delta(u,v)=\\delta(v,u)\\). Ein Knoten \\(v\\) ist von \\(s\\) erreichbar genau dann, wenn \\(\\delta(s,v)<\\infty\\)."
  },
  "doc_dm_084": {
    "definition": "Eine Warteschlange \\(Q=[q_1,\\ldots,q_k]\\) arbeitet nach FIFO:\n• Dequeue gibt \\(q_1\\) zurück und entfernt es: \\(Q=[q_2,\\ldots,q_k]\\).\n• Enqueue fügt \\(x\\) am Ende hinzu: \\(Q=[q_1,\\ldots,q_k,x]\\)."
  },
  "doc_dm_085": {
    "definition": "Ein \\((s,v)\\)-Pfad mit Länge \\(\\delta(s,v)\\) heißt kürzester Pfad von \\(s\\) nach \\(v\\)."
  },
  "doc_dm_086": {
    "definition": "Für eine Breitensuche mit Startknoten \\(s\\) beschreibt die Vorgängerabbildung \\(\\pi\\) den Teilgraphen \\(D_\\pi=(V_\\pi,A_\\pi)\\):\n\\[V_\\pi=\\{v\\in V\\mid\\pi[v]\\ne\\mathrm{nil}\\}\\cup\\{s\\},\\]\n\\[A_\\pi=\\{(\\pi[v],v)\\mid v\\in V_\\pi\\setminus\\{s\\}\\}.\\]\nDieser Teilgraph ist ein gerichteter Baum mit Wurzel \\(s\\). Nach Abschluss heißt er Breitensuchbaum; seine Kanten heißen Baumkanten."
  },
  "doc_dm_087": {
    "definition": "Eine Prioritätswarteschlange speichert Wert-Schlüssel-Paare \\((x,k)\\in X\\times K\\), wobei die Schlüsselmenge \\(K\\) total geordnet ist. Grundoperationen sind:\n• Einfügen und Entfernen eines Paares.\n• Minimum: Element mit kleinstem Schlüssel zurückgeben.\n• Minimum-Entfernen: Dieses Element zurückgeben und entfernen.\n• Schlüssel-Ändern: Den Schlüssel eines gespeicherten Elements ändern.\nDie letzte Operation kann auch durch Entfernen und erneutes Einfügen realisiert werden."
  },
  "doc_dm_088": {
    "definition": "Bei Darstellung von \\(D=(V,A)\\) durch Adjazenzlisten benötigt die Breitensuche einschließlich Initialisierung die Zeit\n\\[\\Theta(|V|+|A|).\\]"
  },
  "doc_dm_089": {
    "definition": "Werden \\(v\\) und danach \\(v'\\) in die BFS-Warteschlange eingefügt, gilt beim Einfügen von \\(v'\\):\n\\[d[v]\\le d[v'].\\]\nDie Distanzen stehen in der Warteschlange in nicht absteigender Reihenfolge."
  },
  "doc_dm_090": {
    "definition": "BFS entdeckt alle vom Startknoten \\(s\\) erreichbaren Knoten. Nach Abschluss gilt\n\\[d[v]=\\delta(s,v)\\qquad(v\\in V).\\]\nFür einen erreichbaren Knoten \\(v\\ne s\\) besteht ein kürzester Pfad aus einem kürzesten Pfad zu \\(\\pi[v]\\) und der Kante \\((\\pi[v],v)\\)."
  },
  "doc_dm_093": {
    "definition": "Der DFS-Vorgängerteilgraph ist \\(D_\\pi=(V,A_\\pi)\\) mit\n\\[A_\\pi=\\{(\\pi[v],v)\\mid v\\in V,\\ \\pi[v]\\ne\\mathrm{nil}\\}.\\]\nEr ist zu jedem Zeitpunkt ein Wald. Nach Abschluss der vollständigen Tiefensuche heißt er Tiefensuchwald und besteht aus einem oder mehreren Tiefensuchbäumen."
  },
  "doc_dm_094": {
    "definition": "Das Lebenszeitintervall eines Knotens \\(u\\) reicht von seiner Entdeckung bis zu seinem Abschluss:\n\\[I_u=\\{t\\in\\mathbb Z\\mid\\operatorname{Grau}[u]\\le t\\le\\operatorname{Schwarz}[u]\\}.\\]"
  },
  "doc_dm_095": {
    "definition": "Beim Sondieren einer Kante \\((u,v)\\) unterscheidet DFS:\n• Baumkante: \\(v\\) ist weiß.\n• Rückwärtskante: \\(v\\) ist grau.\n• Vorwärtskante: \\(v\\) ist schwarz und \\(\\operatorname{Grau}[u]<\\operatorname{Grau}[v]\\).\n• Querkante: \\(v\\) ist schwarz und \\(\\operatorname{Grau}[u]>\\operatorname{Grau}[v]\\).\nDie Baumkanten bilden den Tiefensuchwald."
  },
  "doc_dm_096": {
    "definition": "Ein Stack \\(S=[s_1,\\ldots,s_k]\\) arbeitet nach LIFO:\n• Top liefert das oberste Element \\(s_1\\), ohne es zu entfernen.\n• Pop liefert \\(s_1\\) und entfernt es: \\(S=[s_2,\\ldots,s_k]\\).\n• Push fügt \\(u\\) oben ein: \\(S=[u,s_1,\\ldots,s_k]\\)."
  },
  "doc_dm_097": {
    "definition": "Für einen Digraphen \\(D=(V,A)\\) mit Adjazenzlisten hat ein DFS-Aufruf ab einem Knoten die Laufzeit \\(O(|V|+|A|)\\). Die vollständige Tiefensuche benötigt\n\\[\\Theta(|V|+|A|).\\]"
  },
  "doc_dm_098": {
    "definition": "Beim Start einer Tiefensuche ab einem weißen Knoten \\(u\\) wird ein weißer Knoten \\(v\\) genau dann entdeckt, wenn vor dem Aufruf ein \\((u,v)\\)-Pfad existiert, der ausschließlich aus weißen Knoten besteht."
  },
  "doc_dm_099": {
    "definition": "Ein Digraph enthält genau dann einen vom Startknoten \\(s\\) erreichbaren Zyklus, wenn DFS ab \\(s\\) beim Sondieren einer Kante \\((u,v)\\) einen grauen Zielknoten \\(v\\) findet. Eine solche Kante ist eine Rückwärtskante."
  },
  "doc_dm_100": {
    "definition": "Für zwei verschiedene Knoten \\(u,v\\) gilt nach einer vollständigen Tiefensuche genau einer der Fälle:\n• \\(I_u\\cap I_v=\\varnothing\\): Keiner ist Nachfahre des anderen.\n• \\(I_u\\subsetneq I_v\\): \\(u\\) ist Nachfahre von \\(v\\).\n• \\(I_v\\subsetneq I_u\\): \\(v\\) ist Nachfahre von \\(u\\).\nDie Lebenszeitintervalle sind also disjunkt oder geschachtelt."
  },
  "doc_dm_101": {
    "definition": "\\(v\\) ist genau dann ein echter Nachfahre von \\(u\\) im Tiefensuchwald, wenn\n\\[\\operatorname{Grau}[u]<\\operatorname{Grau}[v]<\\operatorname{Schwarz}[v]<\\operatorname{Schwarz}[u].\\]"
  },
  "doc_dm_103": {
    "definition": "Nach vollständiger DFS auf einem azyklischen Digraphen ergibt die absteigende Reihenfolge der Abschlusszeiten \\(\\operatorname{Schwarz}[u]\\) eine topologische Sortierung. Die Gesamtlaufzeit ist \\(\\Theta(|V|+|A|)\\)."
  },
  "doc_dm_105": {
    "definition": "Eine topologische Sortierung von \\(D=(V,A)\\) ist eine Anordnung \\(v_1,\\ldots,v_n\\) aller Knoten mit\n\\[(v_i,v_j)\\in A\\implies i<j.\\]\nDer Startknoten jeder Kante steht vor ihrem Endknoten. Eine solche Sortierung existiert genau für azyklische Digraphen."
  },
  "doc_dm_106": {
    "definition": "Zwei Knoten \\(u,v\\in V\\) sind gegenseitig erreichbar, wenn sowohl ein \\((u,v)\\)-Pfad als auch ein \\((v,u)\\)-Pfad existiert. Dies ist eine Äquivalenzrelation. Ihre Äquivalenzklassen heißen starke Zusammenhangskomponenten."
  },
  "doc_dm_107": {
    "definition": "Der transponierte Graph zu \\(D=(V,A)\\) ist\n\\[D^\\top=(V,A^\\top),\\qquad A^\\top=\\{(u,v)\\mid(v,u)\\in A\\}.\\]\nEr entsteht durch Umkehrung aller Kantenrichtungen."
  },
  "doc_dm_108": {
    "definition": "Die Knoten des Komponentengraphen \\(D^K=(V^K,A^K)\\) sind die starken Zusammenhangskomponenten von \\(D\\). Zwischen verschiedenen Komponenten \\(U,W\\) gibt es eine Kante, wenn\n\\[\\exists u\\in U\\ \\exists w\\in W:\\quad(u,w)\\in A.\\]\nDer Komponentengraph ist azyklisch."
  },
  "doc_dm_109": {
    "definition": "Bei Adjazenzlistendarstellung von \\(D=(V,A)\\) hat der Algorithmus zur Bestimmung starker Zusammenhangskomponenten die Laufzeit\n\\[\\Theta(|V|+|A|).\\]"
  },
  "doc_dm_110": {
    "definition": "Der SZK-Algorithmus bestimmt die starken Zusammenhangskomponenten eines Digraphen \\(D=(V,A)\\) korrekt."
  },
  "doc_dm_111": {
    "definition": "Ein Spannbaum \\(T=(V,E')\\) eines gewichteten Graphen \\(G=(V,E,w)\\) enthält alle Knoten, ist ein Baum und erfüllt \\(E'\\subseteq E\\). Sein Gewicht ist\n\\[w(T)=\\sum_{e\\in E'}w(e).\\]\nEin minimaler Spannbaum minimiert dieses Gewicht unter allen Spannbäumen von \\(G\\)."
  },
  "doc_dm_112": {
    "definition": "Der vollständige Graph \\(K_n\\) besitzt für \\(n\\ge2\\) genau\n\\[n^{n-2}\\]\nSpannbäume. Das vollständige Aufzählen aller Spannbäume ist daher kein effizienter Ansatz."
  },
  "doc_dm_113": {
    "definition": "Für einen zusammenhängenden gewichteten Graphen \\(G=(V,E,w)\\) berechnet Prim einen minimalen Spannbaum. Bei Adjazenzlisten und einer heapbasierten Prioritätswarteschlange beträgt die Laufzeit\n\\[O(|E|\\log|V|).\\]"
  },
  "doc_dm_114": {
    "definition": "Eine \\(k\\)-Färbung eines Graphen \\(G=(V,E)\\) ist eine Abbildung \\(f:V\\to C\\) mit \\(|C|=k\\), sodass\n\\[\\{u,v\\}\\in E\\implies f(u)\\ne f(v).\\]\nDie kleinste mögliche Farbanzahl heißt chromatische Zahl \\(\\chi(G)\\)."
  },
  "doc_dm_115": {
    "definition": "Ein Hamilton-Kreis besucht jeden Knoten genau einmal und kehrt zum Ausgangsknoten zurück. Ein Hamilton-Pfad besucht jeden Knoten genau einmal, ohne geschlossen sein zu müssen. Ein Euler-Kreis durchläuft dagegen jede Kante genau einmal."
  },
  "doc_dm_116": {
    "definition": "Für die Gewichtsfunktion des hier betrachteten Rundreiseproblems gilt die Dreiecksungleichung:\n\\[w(i,j)\\le w(i,k)+w(k,j).\\]\nEin direkter Weg ist damit nicht teurer als ein Umweg über einen dritten Knoten. Euklidische Distanzen erfüllen diese Eigenschaft."
  },
  "doc_dm_117": {
    "definition": "Für das Rundreiseproblem mit nichtnegativen metrischen Gewichten liefert der auf einem minimalen Spannbaum beruhende Algorithmus eine Rundreise \\(R\\) mit\n\\[w(R)\\le2\\,w(R_{\\min}).\\]\nDabei ist \\(R_{\\min}\\) eine optimale Rundreise. Mit heapbasiertem Prim beträgt die Laufzeit \\(O(|E|\\log|V|)\\)."
  },
  "doc_dm_118": {
    "definition": "Eine boolesche Variable nimmt Werte aus \\(\\{\\mathrm{falsch},\\mathrm{wahr}\\}\\) an, häufig als \\(\\{0,1\\}\\) kodiert."
  },
  "doc_dm_119": {
    "definition": "Eine boolesche Funktion in \\(n\\) Variablen ist eine Abbildung\n\\[f:\\{0,1\\}^n\\to\\{0,1\\}.\\]"
  },
  "doc_dm_120": {
    "definition": "Eine boolesche Formel besteht aus endlich vielen Variablen, den Verknüpfungen \\(\\neg\\), \\(\\lor\\), \\(\\land\\) und den Konstanten \\(0,1\\). Ihre Auswertung definiert eine boolesche Funktion \\(f:\\{0,1\\}^n\\to\\{0,1\\}\\). Formeln sind äquivalent, wenn sie dieselbe Funktion darstellen. Für \\(a\\land b\\) schreibt man auch \\(a\\cdot b\\) oder \\(ab\\); die Konjunktion bindet stärker als die Disjunktion."
  },
  "doc_dm_121": {
    "definition": "Eine boolesche Formel ist erfüllbar, wenn mindestens eine Belegung sie wahr macht:\n\\[\\exists x\\in\\{0,1\\}^n:\\quad f(x)=1.\\]\nAndernfalls ist sie unerfüllbar."
  },
  "doc_dm_122": {
    "definition": "Eine Tautologie ist unter jeder Belegung wahr:\n\\[\\forall x\\in\\{0,1\\}^n:\\quad f(x)=1.\\]"
  },
  "doc_dm_123": {
    "definition": "Ein Literal ist eine Variable \\(x\\) oder ihre Negation \\(\\neg x\\). Eine Elementardisjunktion (Klausel) ist eine Disjunktion von Literalen; eine Elementarkonjunktion ist eine Konjunktion von Literalen. Die leere Disjunktion ist \\(0\\), die leere Konjunktion ist \\(1\\). Eine KNF ist eine Konjunktion von Klauseln; eine DNF ist eine Disjunktion von Elementarkonjunktionen."
  },
  "doc_dm_124": {
    "definition": "Für eine boolesche Funktion \\(f:\\{0,1\\}^n\\to\\{0,1\\}\\) ist die duale Funktion\n\\[f^*(x_1,\\ldots,x_n)=\\neg f(\\neg x_1,\\ldots,\\neg x_n).\\]"
  },
  "doc_dm_125": {
    "definition": "Die duale Formel entsteht durch Vertauschen von \\(\\land\\) und \\(\\lor\\) sowie \\(0\\) und \\(1\\):\n\\[\\begin{aligned}L^*&=L\\quad\\text{für Literale }L,\\\\0^*&=1,\\qquad1^*=0,\\\\(A\\lor B)^*&=A^*\\land B^*,\\\\(A\\land B)^*&=A^*\\lor B^*,\\\\(\\neg A)^*&=\\neg(A^*).\\end{aligned}\\]"
  },
  "doc_dm_126": {
    "definition": "Jede boolesche Funktion \\(f:\\{0,1\\}^n\\to\\{0,1\\}\\) lässt sich als DNF darstellen. Für jede Belegung mit Funktionswert \\(1\\) bildet man eine passende Elementarkonjunktion und verknüpft diese durch Disjunktion."
  },
  "doc_dm_127": {
    "definition": "Stellt eine boolesche Formel \\(F\\) die Funktion \\(f\\) dar, so stellt die duale Formel \\(F^*\\) die duale Funktion \\(f^*\\) dar."
  },
  "doc_dm_128": {
    "definition": "Jede boolesche Funktion \\(f:\\{0,1\\}^n\\to\\{0,1\\}\\) lässt sich durch eine KNF darstellen. Man bildet zu jeder Belegung mit Funktionswert \\(0\\) eine Klausel, die genau unter dieser Belegung falsch ist, und verknüpft die Klauseln durch Konjunktion."
  },
  "doc_dm_130": {
    "definition": "SAT ist das Entscheidungsproblem, ob eine gegebene KNF erfüllbar ist. Als Sprache:\n\\[\\mathrm{SAT}=\\{\\langle F\\rangle\\mid F\\text{ ist eine erfüllbare KNF}\\}.\\]"
  },
  "doc_dm_131": {
    "definition": "Aus den Klauseln \\(G=A\\lor x\\) und \\(H=B\\lor\\neg x\\) entsteht bezüglich \\(x\\) die Resolvente \\(A\\lor B\\):\n\\[\\frac{A\\lor x\\qquad B\\lor\\neg x}{A\\lor B}.\\]\nEin Resolutionsbeweis beginnt mit Klauseln der gegebenen KNF und leitet neue Klauseln jeweils als Resolventen zweier bereits verfügbarer Klauseln her. Die letzte Klausel ist das Beweisziel. Die Zahl der neu hergeleiteten Klauseln ist die Beweislänge; eine Ausgangsklausel hat einen Beweis der Länge \\(0\\). Eine Widerlegung leitet die leere Klausel \\(0\\) her."
  },
  "doc_dm_132": {
    "definition": "Eine \\(m\\)-KNF ist eine KNF, deren Klauseln jeweils höchstens \\(m\\) Literale enthalten. Das Problem \\(m\\)-SAT entscheidet, ob eine gegebene \\(m\\)-KNF erfüllbar ist:\n\\[m\\text{-SAT}=\\{\\langle F\\rangle\\mid F\\text{ ist eine erfüllbare }m\\text{-KNF}\\}.\\]"
  },
  "doc_dm_133": {
    "definition": "\\(x\\) ist ein positives Literal, \\(\\neg x\\) ein negatives. Eine Hornklausel enthält höchstens ein positives Literal. Eine Klausel mit genau einem Literal heißt Einheitsklausel. Eine Horn-KNF ist eine Konjunktion von Hornklauseln. HORNSAT entscheidet deren Erfüllbarkeit:\n\\[\\mathrm{HORNSAT}=\\{\\langle F\\rangle\\mid F\\text{ ist eine erfüllbare Horn-KNF}\\}.\\]"
  },
  "doc_dm_134": {
    "definition": "Eine KNF \\(F\\) ist genau dann unerfüllbar, wenn durch Resolution aus ihren Klauseln die leere Klausel \\(0\\) hergeleitet werden kann."
  },
  "doc_dm_137": {
    "definition": "Die Zahl \\(\\sqrt3\\) ist irrational:\n\\[\\sqrt3\\notin\\mathbb Q.\\]",
    "term": "Irrationalität von \\(\\sqrt3\\)",
    "question": "Formulieren Sie den Satz: Irrationalität von \\(\\sqrt3\\)."
  },
  "doc_dm_138": {
    "definition": "Um \\(P(n)\\) für alle \\(n\\in\\mathbb N\\) zu beweisen, zeigt man:\n• Induktionsanfang: \\(P(1)\\).\n• Induktionsschritt: \\(P(n)\\implies P(n+1)\\) für jedes \\(n\\ge1\\).\nDaraus folgt \\(\\forall n\\in\\mathbb N:\\ P(n)\\)."
  },
  "doc_dm_139": {
    "definition": "Für jedes \\(n\\in\\mathbb N\\) gilt:\n\\[\\sum_{i=1}^n i=\\frac{n(n+1)}2.\\]"
  },
  "doc_dm_140": {
    "definition": "Für alle \\(n\\in\\mathbb N\\) gilt:\n\\[n\\le2^n.\\]",
    "term": "Ungleichung \\(n\\le2^n\\)",
    "question": "Formulieren Sie den Satz: Ungleichung \\(n\\le2^n\\)."
  },
  "doc_dm_141": {
    "definition": "Bei starker vollständiger Induktion zeigt man \\(P(1)\\) und für jedes \\(n\\ge1\\):\n\\[\\bigl(P(1)\\land\\cdots\\land P(n)\\bigr)\\implies P(n+1).\\]\nDann gilt \\(P(n)\\) für alle \\(n\\in\\mathbb N\\)."
  },
  "doc_dm_142": {
    "definition": "Jede natürliche Zahl \\(n\\ge1\\) ist ein Produkt von Primzahlen:\n\\[n=\\prod_{i=1}^t p_i,\\qquad t\\in\\mathbb N_0.\\]\nFür \\(n=1\\) verwendet man das leere Produkt mit \\(t=0\\)."
  },
  "doc_dm_143": {
    "definition": "Für eine endliche Menge \\(A\\) gilt:\n\\[|A^n|=|A|^n.\\]"
  },
  "doc_dm_144": {
    "definition": "Für \\(x,y\\in\\mathbb R\\) und \\(n\\in\\mathbb N_0\\) gilt der binomische Lehrsatz:\n\\[(x+y)^n=\\sum_{i=0}^n\\binom ni x^i y^{n-i}.\\]"
  },
  "doc_aup_085": {
    "definition": "Eine Relation beschreibt nur dann eine Funktion, wenn sie rechtseindeutig ist: Zu jedem Argument darf es höchstens einen Funktionswert geben.\n\nFormal: Sind \\((x,y_1)\\) und \\((x,y_2)\\) in der Relation, dann muss \\(y_1=y_2\\) gelten.\n\nBei einer totalen Funktion kommt zusätzlich hinzu, dass für jedes Argument tatsächlich ein Funktionswert existiert."
  },
  "doc_aup_090": {
    "definition": "Bei der lexikographischen Ordnung werden zuerst die ersten Komponenten verglichen. Nur bei Gleichheit entscheidet die nächste Komponente:\n\\[(a,b)<(c,d)\\iff a<c\\lor(a=c\\land b<d).\\]\nAnalog gilt:\n\\[(a,b)\\le(c,d)\\iff a<c\\lor(a=c\\land b\\le d).\\]",
    "question": "Wie ist die lexikographische Ordnung auf Tupeln definiert, insbesondere \\((a,b)\\le(c,d)\\)?"
  },
  "doc_aup_098": {
    "definition": "Sondieren bedeutet, bei einer Kollision systematisch weitere Tabellenpositionen zu prüfen.\n• Lineares Sondieren:\n\\[g_i(k)=(h(k)+i)\\bmod m.\\]\n• Quadratisches Sondieren:\n\\[g_i(k)=(h(k)+c_1i+c_2i^2)\\bmod m.\\]\n• Double Hashing:\n\\[g_i(k)=(h_1(k)+i\\,h_2(k))\\bmod m.\\]\nDie Sondierungsfolge legt die Reihenfolge der alternativen Positionen fest."
  },
  "doc_dt_095": {
    "definition": "Ein Medvedev-Automat ist ein Spezialfall des Moore-Automaten, bei dem die Ausgabe direkt dem Zustand entspricht: \\(O=S\\). Deshalb ist keine separate Ausgabelogik nötig. Die Zustandskodierung muss so gewählt werden, dass die Zustandsbits selbst bereits die gewünschte Ausgabe darstellen."
  },
  "doc_db_intro_005": {
    "definition": "Ein Datenbanksystem kombiniert ein DBMS mit einer anwendungsspezifischen Datenbank einschließlich der benötigten Metadaten.\n\n\\(\\mathrm{DBS}=\\mathrm{DBMS}+\\mathrm{DB}\\) (einschließlich Metadaten)."
  },
  "doc_ti_intro_001": {
    "definition": "\\(A\\subseteq B\\) bedeutet, dass jedes Element von \\(A\\) auch in \\(B\\) liegt:\n\\[\\forall x:\\quad x\\in A\\implies x\\in B.\\]\nDie Relation \\(\\subseteq\\) heißt Inklusion."
  },
  "doc_ti_intro_002": {
    "definition": "\\(A\\subsetneq B\\) bedeutet \\(A\\subseteq B\\) und \\(A\\ne B\\). Es gibt mindestens ein Element in \\(B\\), das nicht in \\(A\\) liegt."
  },
  "doc_ti_intro_003": {
    "definition": "Man zeigt beide Inklusionen:\n\\[A=B\\iff (A\\subseteq B\\land B\\subseteq A).\\]\nDann enthalten beide Mengen genau dieselben Elemente.",
    "question": "Wie zeigt man \\(A=B\\) durch Inklusionen?"
  },
  "doc_ti_intro_004": {
    "definition": "\\(\\varnothing\\) ist die Menge ohne Elemente. Es gilt \\(|\\varnothing|=0\\) und \\(\\varnothing\\subseteq A\\) für jede Menge \\(A\\). Dagegen enthält \\(\\{\\varnothing\\}\\) genau ein Element."
  },
  "doc_ti_intro_005": {
    "definition": "Die Potenzmenge enthält alle Teilmengen von \\(X\\):\n\\[\\mathcal P(X)=2^X=\\{A\\mid A\\subseteq X\\}.\\]\nFür endliches \\(X\\) gilt \\(|\\mathcal P(X)|=2^{|X|}\\). Beispiel: \\(\\mathcal P(\\{a\\})=\\{\\varnothing,\\{a\\}\\}\\)."
  },
  "doc_ti_intro_006": {
    "definition": "Der Durchschnitt enthält die gemeinsamen Elemente, die Vereinigung die Elemente aus mindestens einer der beiden Mengen:\n\\[\\begin{aligned}A\\cap B&=\\{x\\mid x\\in A\\land x\\in B\\},\\\\A\\cup B&=\\{x\\mid x\\in A\\lor x\\in B\\}.\\end{aligned}\\]\nDas Oder ist einschließend."
  },
  "doc_ti_intro_007": {
    "definition": "Die Differenz enthält die Elemente aus \\(A\\), die nicht in \\(B\\) liegen:\n\\[A\\setminus B=\\{x\\mid x\\in A\\land x\\notin B\\}.\\]\nDas Komplement von \\(A\\) bezüglich einer festgelegten Grundmenge \\(M\\) ist \\(M\\setminus A\\)."
  },
  "doc_ti_intro_008": {
    "definition": "Die symmetrische Differenz enthält die Elemente, die in genau einer der beiden Mengen liegen:\n\\[A\\mathbin{\\triangle}B=(A\\setminus B)\\cup(B\\setminus A).\\]"
  },
  "doc_ti_intro_009": {
    "definition": "\\(A\\) und \\(B\\) sind disjunkt, wenn \\(A\\cap B=\\varnothing\\). Ihre Vereinigung heißt dann disjunkte Vereinigung und wird als \\(A\\mathbin{\\dot\\cup}B\\) geschrieben."
  },
  "doc_ti_intro_010": {
    "definition": "\\[(a,b)=(c,d)\\iff (a=c\\land b=d).\\]\nDie Reihenfolge der Komponenten ist entscheidend."
  },
  "doc_ti_intro_011": {
    "definition": "\\[A\\times B=\\{(a,b)\\mid a\\in A,\\ b\\in B\\}.\\]\nDas kartesische Produkt enthält alle geordneten Paare mit erster Komponente aus \\(A\\) und zweiter Komponente aus \\(B\\).",
    "question": "Wie ist \\(A\\times B\\) definiert?"
  },
  "doc_ti_intro_012": {
    "definition": "Ein \\(n\\)-Tupel \\((x_1,\\ldots,x_n)\\) ist eine geordnete Folge von \\(n\\) Komponenten:\n\\[X_1\\times\\cdots\\times X_n=\\{(x_1,\\ldots,x_n)\\mid x_i\\in X_i\\text{ für }1\\le i\\le n\\}.\\]\n\\(X^n\\) bezeichnet das \\(n\\)-fache kartesische Produkt von \\(X\\) mit sich selbst.",
    "term": "Tupel und \\(X^n\\)",
    "question": "Was sind ein n-Tupel und das Produkt \\(X^n\\)?"
  },
  "doc_ti_intro_013": {
    "definition": "Eine Abbildung \\(f:X\\to Y\\) ordnet jedem \\(x\\in X\\) genau ein Element \\(f(x)\\in Y\\) zu. \\(X\\) ist der Definitionsbereich und \\(Y\\) die Zielmenge (im Katalog „Wertebereich“). Das Bild \\(f(X)\\) kann eine echte Teilmenge von \\(Y\\) sein.",
    "question": "Was ist eine Abbildung \\(f:X\\to Y\\)?"
  },
  "doc_ti_intro_014": {
    "definition": "Die Abbildungen müssen denselben Definitionsbereich und dieselbe Zielmenge besitzen. Zusätzlich gilt:\n\\[f=g\\iff\\forall x\\in X:\\ f(x)=g(x).\\]\nDie Zuordnungsvorschrift allein genügt nicht."
  },
  "doc_ti_intro_015": {
    "definition": "\\(Y^X\\) ist die Menge aller Abbildungen von \\(X\\) nach \\(Y\\):\n\\[Y^X=\\{f\\mid f:X\\to Y\\},\\qquad |Y^X|=|Y|^{|X|}.\\]",
    "question": "Was bedeutet \\(Y^X\\) und wie groß ist diese Menge?"
  },
  "doc_ti_intro_016": {
    "definition": "Für \\(A\\subseteq X\\) und \\(f:X\\to Y\\) ist\n\\[f(A)=\\{f(x)\\mid x\\in A\\}.\\]\nDas Bild enthält alle Werte, die \\(f\\) auf Elementen von \\(A\\) annimmt.",
    "question": "Was ist das Bild einer Teilmenge \\(A\\subseteq X\\) unter \\(f:X\\to Y\\)?"
  },
  "doc_ti_intro_017": {
    "definition": "Für \\(B\\subseteq Y\\) ist\n\\[f^{-1}(B)=\\{x\\in X\\mid f(x)\\in B\\}.\\]\nDas Urbild ist auch definiert, wenn \\(f\\) nicht bijektiv ist; die Schreibweise setzt keine Umkehrabbildung voraus.",
    "question": "Was ist das Urbild einer Teilmenge \\(B\\subseteq Y\\)?"
  },
  "doc_ti_intro_018": {
    "definition": "Verschiedene Eingaben haben verschiedene Bilder. Äquivalent:\n\\[\\forall x_1,x_2\\in X:\\quad f(x_1)=f(x_2)\\implies x_1=x_2.\\]\nJedes Element der Zielmenge besitzt höchstens ein Urbildelement.",
    "question": "Wann ist \\(f:X\\to Y\\) injektiv?"
  },
  "doc_ti_intro_019": {
    "definition": "Jedes Element der Zielmenge wird getroffen:\n\\[\\forall y\\in Y\\ \\exists x\\in X:\\quad f(x)=y.\\]\nÄquivalent: \\(f(X)=Y\\).",
    "question": "Wann ist \\(f:X\\to Y\\) surjektiv?"
  },
  "doc_ti_intro_021": {
    "definition": "Genau dann, wenn \\(f:X\\to Y\\) bijektiv ist. Die Umkehrabbildung \\(f^{-1}:Y\\to X\\) ordnet jedem \\(y\\) das eindeutige \\(x\\) mit \\(f(x)=y\\) zu. Es gilt:\n\\[f^{-1}\\circ f=\\operatorname{id}_X,\\qquad f\\circ f^{-1}=\\operatorname{id}_Y.\\]",
    "question": "Wann existiert die Umkehrabbildung \\(f^{-1}:Y\\to X\\)?"
  },
  "doc_ti_intro_022": {
    "definition": "Für \\(f:X\\to Y\\) und \\(g:Y\\to Z\\) ist die Komposition \\(g\\circ f:X\\to Z\\) definiert durch\n\\[(g\\circ f)(x)=g(f(x)).\\]\nZuerst wird \\(f\\), danach \\(g\\) angewendet.",
    "question": "Wie ist \\(g\\circ f\\) definiert?"
  },
  "doc_ti_intro_023": {
    "definition": "Die identische Abbildung auf \\(X\\) ist\n\\[\\operatorname{id}_X:X\\to X,\\qquad \\operatorname{id}_X(x)=x.\\]\nSie lässt jedes Element unverändert."
  },
  "doc_ti_intro_024": {
    "definition": "\\(X\\) ist leer oder es existiert für ein \\(n\\ge1\\) eine Bijektion \\(\\{1,\\ldots,n\\}\\to X\\). Dann ist \\(|X|=n\\) die Anzahl ihrer Elemente; \\(|\\varnothing|=0\\)."
  },
  "doc_ti_intro_025": {
    "definition": "\\(A\\) und \\(B\\) sind gleichmächtig, wenn eine Bijektion \\(A\\to B\\) existiert. Man schreibt \\(|A|=|B|\\). Gleichmächtigkeit ist reflexiv, symmetrisch und transitiv."
  },
  "doc_ti_intro_026": {
    "definition": "Positive Brüche \\(\\frac pq\\) werden in einem zweidimensionalen Schema diagonal aufgezählt. Nicht vollständig gekürzte Brüche werden übersprungen, um Wiederholungen zu vermeiden. Anschließend ergänzt man \\(0\\) und zu jeder positiven Zahl ihr Negatives. So erhält man eine Aufzählung aller rationalen Zahlen ohne Wiederholungen.",
    "question": "Wie zeigt man, dass \\(\\mathbb Q\\) abzählbar ist?"
  },
  "doc_ti_intro_027": {
    "definition": "Für \\(x,y\\in\\mathbb N_0\\) ist\n\\[\\pi(x,y)=y+\\frac{(x+y)(x+y+1)}2\\]\neine Bijektion \\(\\mathbb N_0\\times\\mathbb N_0\\to\\mathbb N_0\\). Somit sind \\(\\mathbb N_0\\times\\mathbb N_0\\) und \\(\\mathbb N_0\\) gleichmächtig. Die Formel verwendet die Konvention mit \\(0\\)."
  },
  "doc_ti_intro_028": {
    "definition": "Wenn eine Bijektion zwischen der Menge und \\(\\mathbb N\\) existiert. Ihre Elemente lassen sich ohne Auslassungen oder Wiederholungen durchnummerieren. Die Mächtigkeit ist \\(\\aleph_0\\). Beispiele sind \\(\\mathbb N\\), \\(\\mathbb Z\\) und \\(\\mathbb Q\\)."
  },
  "doc_ti_intro_029": {
    "definition": "Eine Menge ist überabzählbar, wenn sie weder endlich noch abzählbar unendlich ist. Beispiel: \\(\\mathbb R\\) mit Mächtigkeit \\(2^{\\aleph_0}\\). Nicht jede überabzählbare Menge hat diese Mächtigkeit; etwa \\(\\mathcal P(\\mathbb R)\\) ist noch mächtiger."
  },
  "doc_ti_intro_030": {
    "definition": "Angenommen, \\(z_1,z_2,\\ldots\\) wäre eine vollständige Liste der Zahlen aus \\((0,1)\\). Bezeichne die \\(j\\)-te Dezimalstelle von \\(z_i\\) mit \\(a_{ij}\\). Konstruiere:\n\\[x=0{,}x_1x_2\\ldots,\\qquad x_i=\\begin{cases}4,&a_{ii}=5,\\\\5,&a_{ii}\\ne5.\\end{cases}\\]\nDann unterscheidet sich \\(x\\) von jedem \\(z_i\\) an der \\(i\\)-ten Stelle und liegt dennoch in \\((0,1)\\). Widerspruch zur Vollständigkeit der Liste.",
    "question": "Warum lässt sich \\((0,1)\\) nicht vollständig aufzählen?"
  },
  "doc_ti_intro_031": {
    "definition": "Für jede Menge \\(A\\) gilt:\n\\[|A|<|\\mathcal P(A)|.\\]\nEs gibt keine surjektive Abbildung \\(A\\to\\mathcal P(A)\\). Insbesondere ist die Potenzmenge einer abzählbar unendlichen Menge überabzählbar."
  },
  "doc_ti_intro_032": {
    "definition": "Betrachte\n\\[D=\\{a\\in A\\mid a\\notin f(a)\\}.\\]\nWäre \\(D=f(d)\\) für ein \\(d\\in A\\), dann gälte \\(d\\in D\\iff d\\notin D\\). Dieser Widerspruch zeigt, dass \\(D\\) nicht im Bild von \\(f\\) liegt.",
    "question": "Wie zeigt man, dass \\(f:A\\to\\mathcal P(A)\\) nicht surjektiv sein kann?"
  },
  "doc_ti_intro_033": {
    "definition": "Jeder Teilmenge \\(B\\subseteq A\\) entspricht eindeutig die charakteristische Funktion\n\\[\\chi_B(x)=\\begin{cases}1,&x\\in B,\\\\0,&x\\notin B.\\end{cases}\\]\nDaher sind \\(\\mathcal P(A)\\) und \\(\\{0,1\\}^A\\) gleichmächtig; ihre Mächtigkeit ist \\(2^{|A|}\\).",
    "question": "Wie entsprechen Teilmengen von A den Funktionen \\(A\\to\\{0,1\\}\\)?"
  },
  "doc_ti_intro_034": {
    "definition": "Angenommen, \\(f_1,f_2,\\ldots\\) listete alle Funktionen auf. Definiere\n\\[g(i)=f_i(i)+1.\\]\nDann ist \\(g\\) eine Funktion \\(\\mathbb N\\to\\mathbb N\\), unterscheidet sich aber von jedem \\(f_i\\) an der Stelle \\(i\\). Also kann keine solche Liste vollständig sein.",
    "term": "Überabzählbarkeit von \\(\\mathbb N^{\\mathbb N}\\)",
    "question": "Warum ist die Menge aller Funktionen \\(\\mathbb N\\to\\mathbb N\\) überabzählbar?"
  },
  "doc_ti_intro_035": {
    "definition": "Eine Relation \\(R\\) ist eine Teilmenge von \\(X\\times Y\\). Für \\((x,y)\\in R\\) schreibt man auch \\(xRy\\). Bei \\(X=Y\\) spricht man von einer Relation auf \\(X\\)."
  },
  "doc_ti_intro_036": {
    "definition": "• Reflexiv: \\(\\forall a\\in X:\\ aRa\\).\n• Irreflexiv: \\(\\forall a\\in X:\\ \\neg(aRa)\\).\nEine Relation kann auch keines von beidem sein, wenn nur einige Elemente zu sich selbst in Relation stehen."
  },
  "doc_ti_intro_037": {
    "definition": "\\[\\forall a,b\\in X:\\quad aRb\\implies bRa.\\]\nJede Beziehung gilt auch in umgekehrter Richtung."
  },
  "doc_ti_intro_038": {
    "definition": "\\[\\forall a,b\\in X:\\quad (aRb\\land bRa)\\implies a=b.\\]\nZwischen verschiedenen Elementen dürfen nicht beide Richtungen zugleich gelten. Selbstbeziehungen sind erlaubt."
  },
  "doc_ti_intro_039": {
    "definition": "\\[\\forall a,b\\in X:\\quad aRb\\implies\\neg(bRa).\\]\nKeine Beziehung darf zugleich in Gegenrichtung gelten. Eine asymmetrische Relation ist insbesondere irreflexiv."
  },
  "doc_ti_intro_040": {
    "definition": "\\[\\forall a,b,c\\in X:\\quad (aRb\\land bRc)\\implies aRc.\\]"
  },
  "doc_ti_intro_041": {
    "definition": "\\[\\forall a,b\\in X:\\quad aRb\\lor bRa.\\]\nDamit sind alle Elemente miteinander vergleichbar."
  },
  "doc_ti_intro_045": {
    "definition": "Die Äquivalenzklasse von \\(x\\) ist\n\\[[x]_{\\sim}=\\{y\\in X\\mid x\\sim y\\}.\\]\nDie Menge aller Äquivalenzklassen ist\n\\[X/{\\sim}=\\{[x]_{\\sim}\\mid x\\in X\\}.\\]\nDie Klassen bilden eine Partition von \\(X\\).",
    "question": "Was sind \\([x]_{\\sim}\\) und \\(X/{\\sim}\\)?"
  },
  "doc_ti_intro_046": {
    "definition": "Eine partielle Ordnung \\(\\preceq\\) auf \\(X\\) ist reflexiv, antisymmetrisch und transitiv. Das Paar \\((X,\\preceq)\\) heißt partiell geordnete Menge oder Poset. Nicht alle Elemente müssen vergleichbar sein."
  },
  "doc_ti_intro_047": {
    "definition": "Wenn zusätzlich alle Elemente vergleichbar sind:\n\\[\\forall a,b\\in X:\\quad a\\preceq b\\lor b\\preceq a.\\]"
  },
  "doc_ti_intro_048": {
    "definition": "• Abgeschlossenheit: \\(\\ast:G\\times G\\to G\\).\n• Assoziativität: \\(a\\ast(b\\ast c)=(a\\ast b)\\ast c\\).\n• Neutrales Element \\(e\\in G\\): \\(e\\ast a=a\\ast e=a\\).\n• Zu jedem \\(a\\in G\\) existiert ein inverses Element \\(a^{-1}\\in G\\):\n\\[a^{-1}\\ast a=a\\ast a^{-1}=e.\\]\nDas neutrale Element und das jeweilige inverse Element sind eindeutig.",
    "question": "Welche Axiome definieren eine Gruppe \\((G,\\ast)\\)?"
  },
  "doc_ti_intro_049": {
    "definition": "Es gelten die Kürzungsregeln:\n\\[\\begin{aligned}a\\ast b=a\\ast c&\\implies b=c,\\\\b\\ast a=c\\ast a&\\implies b=c.\\end{aligned}\\]\nDaher tritt in einer Zeile oder Spalte der Verknüpfungstabelle kein Element mehrfach auf. Bei endlichen Gruppen enthält jede Zeile und Spalte jedes Gruppenelement genau einmal."
  },
  "doc_ti_intro_051": {
    "definition": "Eine Gruppe ist abelsch, wenn ihre Verknüpfung zusätzlich kommutativ ist:\n\\[\\forall a,b\\in G:\\quad a\\ast b=b\\ast a.\\]\nBeispiele: \\((\\mathbb Z,+)\\), \\((\\mathbb Q,+)\\), \\((\\mathbb R,+)\\), \\((\\mathbb Q\\setminus\\{0\\},\\cdot)\\) und \\((\\mathbb R\\setminus\\{0\\},\\cdot)\\)."
  },
  "doc_ti_intro_052": {
    "definition": "Die nichtleere Teilmenge \\(H\\subseteq G\\) ist unter der Verknüpfung und der Bildung inverser Elemente abgeschlossen:\n\\[\\forall a,b\\in H:\\quad a\\cdot b\\in H\\quad\\text{und}\\quad a^{-1}\\in H.\\]\nMit der von \\(G\\) übernommenen Verknüpfung ist \\(H\\) selbst eine Gruppe."
  },
  "doc_ti_intro_053": {
    "definition": "\\(V\\) und \\(W\\) müssen Vektorräume über demselben Körper \\(K\\) sein. Für alle \\(v,w\\in V\\) und \\(\\lambda\\in K\\) gilt:\n• Additivität: \\(F(v+w)=F(v)+F(w)\\).\n• Homogenität: \\(F(\\lambda v)=\\lambda F(v)\\).",
    "question": "Wann ist \\(F:V\\to W\\) linear?"
  },
  "doc_ti_intro_054": {
    "definition": "Für alle \\(v,w\\in V\\) und \\(\\lambda,\\mu\\in K\\) gilt:\n\\[F(\\lambda v+\\mu w)=\\lambda F(v)+\\mu F(w).\\]"
  },
  "doc_ti_intro_055": {
    "definition": "Ein endliches Alphabet ist eine endliche Menge von Zeichen:\n\\[\\Sigma=\\{a_1,\\ldots,a_s\\}.\\]\nJedes Zeichen wird als nicht weiter zerlegbarer Buchstabe behandelt.",
    "question": "Was ist ein endliches Alphabet \\(\\Sigma\\)?"
  },
  "doc_ti_intro_056": {
    "definition": "Ein Wort \\(w=(w_1,\\ldots,w_n)\\) ist ein geordnetes Tupel von Zeichen \\(w_i\\in\\Sigma\\). Seine Länge ist \\(|w|=n\\). Reihenfolge und Wiederholungen von Zeichen sind relevant.",
    "question": "Was ist ein Wort über \\(\\Sigma\\) und wie ist seine Länge definiert?"
  },
  "doc_ti_intro_057": {
    "definition": "\\(\\lambda\\) ist das Wort der Länge \\(0\\). Es enthält keine Zeichen. Die Menge \\(\\{\\lambda\\}\\) enthält ein Wort und ist deshalb nicht die leere Menge \\(\\varnothing\\).",
    "question": "Was ist das leere Wort \\(\\lambda\\)?"
  },
  "doc_ti_intro_058": {
    "definition": "\\(\\Sigma^n\\) ist die Menge aller Wörter über \\(\\Sigma\\) mit Länge \\(n\\), also das \\(n\\)-fache kartesische Produkt des Alphabets. \\(\\Sigma^0=\\{\\lambda\\}\\) enthält nur das leere Wort.",
    "term": "\\(\\Sigma^n\\) und \\(\\Sigma^0\\)",
    "question": "Was bedeuten \\(\\Sigma^n\\) und \\(\\Sigma^0\\)?"
  },
  "doc_ti_intro_059": {
    "definition": "\\(\\Sigma^*\\) ist die Menge aller endlichen Wörter über \\(\\Sigma\\) einschließlich \\(\\lambda\\):\n\\[\\Sigma^*=\\bigcup_{n=0}^{\\infty}\\Sigma^n.\\]\n\\(\\Sigma^+=\\Sigma^*\\setminus\\{\\lambda\\}\\) enthält alle nichtleeren Wörter.",
    "term": "\\(\\Sigma^*\\) und \\(\\Sigma^+\\)",
    "question": "Wie unterscheiden sich \\(\\Sigma^*\\) und \\(\\Sigma^+\\)?"
  },
  "doc_ti_intro_060": {
    "definition": "Die Konkatenation hängt \\(y\\) an \\(x\\) an. Für \\(x=(x_1,\\ldots,x_n)\\) und \\(y=(y_1,\\ldots,y_m)\\) gilt:\n\\[x\\cdot y=(x_1,\\ldots,x_n,y_1,\\ldots,y_m).\\]\nDie Längen addieren sich: \\(|x\\cdot y|=|x|+|y|\\).",
    "question": "Was ist die Konkatenation \\(x\\cdot y\\)?"
  },
  "doc_ti_intro_061": {
    "definition": "In \\(w=x\\cdot y\\) ist \\(x\\) ein Präfix und \\(y\\) ein Suffix von \\(w\\). Das leere Wort ist neutrales Element der Konkatenation:\n\\[x\\cdot\\lambda=\\lambda\\cdot x=x.\\]",
    "question": "Welche Rolle spielen x und y in der Zerlegung \\(w=x\\cdot y\\)?"
  },
  "doc_ti_intro_062": {
    "definition": "Eine formale Sprache ist eine beliebige Teilmenge \\(L\\subseteq\\Sigma^*\\). Sie kann leer, endlich oder unendlich sein.",
    "question": "Was ist eine formale Sprache über \\(\\Sigma\\)?"
  },
  "doc_ti_intro_063": {
    "definition": "Für \\(L,L_1,L_2\\subseteq\\Sigma^*\\) gilt:\n• Komplement: \\(\\Sigma^*\\setminus L\\), relativ zum festgelegten Alphabet.\n• Vereinigung: \\(L_1\\cup L_2\\) enthält Wörter aus mindestens einer der beiden Sprachen.\n• Durchschnitt: \\(L_1\\cap L_2\\) enthält Wörter aus beiden Sprachen."
  },
  "doc_ti_intro_064": {
    "definition": "\\[L_1\\cdot L_2=\\{u\\cdot v\\mid u\\in L_1,\\ v\\in L_2\\}.\\]\nEs werden alle möglichen Verkettungen eines Wortes aus \\(L_1\\) mit einem Wort aus \\(L_2\\) gebildet.",
    "question": "Wie ist \\(L_1\\cdot L_2\\) definiert?"
  },
  "doc_ti_intro_065": {
    "definition": "\\(L^n\\) ist die \\(n\\)-fache Konkatenation von \\(L\\) mit sich selbst. Es gilt:\n\\[L^0=\\{\\lambda\\},\\qquad L^{n+1}=L^n\\cdot L.\\]\nWörter in \\(L^n\\) entstehen durch Verkettung von \\(n\\) Wörtern aus \\(L\\); sie müssen nicht die Zeichenlänge \\(n\\) haben.",
    "question": "Was bedeutet \\(L^n\\)?"
  },
  "doc_ti_intro_066": {
    "definition": "\\(L^*\\) enthält alle Verkettungen von beliebig vielen, auch null, Wörtern aus \\(L\\):\n\\[L^*=\\bigcup_{n=0}^{\\infty}L^n.\\]\nDa \\(L^0=\\{\\lambda\\}\\), gilt stets \\(\\lambda\\in L^*\\), auch für \\(L=\\varnothing\\).",
    "question": "Was ist \\(L^*\\) und warum enthält es immer \\(\\lambda\\)?"
  },
  "doc_ti_intro_067": {
    "definition": "\\[L^+=L\\cdot L^*=\\bigcup_{n=1}^{\\infty}L^n.\\]\nDie positive Hülle enthält Verkettungen von mindestens einem Wort aus \\(L\\). Es gilt \\(\\lambda\\in L^+\\iff\\lambda\\in L\\). Daher ist \\(L^+=L^*\\setminus\\{\\lambda\\}\\) nur dann richtig, wenn \\(\\lambda\\notin L\\).",
    "term": "Kleene-Plus / Positive Hülle \\(L^+\\)",
    "question": "Was ist \\(L^+\\) und wann enthält es \\(\\lambda\\)?"
  },
  "doc_aup_089": {
    "definition": "Der Operator `$` ist Funktionsanwendung mit sehr niedriger Priorität. Es gilt `f $ x = f x`. Dadurch kann man Klammern sparen: `sqrt $ 3 + 4` bedeutet `sqrt (3 + 4)`. Alles rechts von `$` wird als Argument der Funktion links aufgefasst."
  }
};
