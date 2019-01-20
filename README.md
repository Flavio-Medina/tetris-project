# tetris-project
Sehr geehrter Herr Springer,
wir präsentieren Ihnen unser Tetris-Browsergame.

Unsere Usernames auf GitHub lauten wie folgt:

- Flavio-Medina = Flavio Medina
- Phil71 = Philipp Prica
- Socrer = Benno Vuong

### Installation
Unser Projekt wird, wie besprochen, über Docker eingesetzt und benötigt folgende Installation:

```sh
$ sudo docker-compose build
$ sudo docker-compose up
```
Im Eigentlichen soll sich der MongoDB Container vor dem Tetris Container starten. Es kam aber auch schon vor, dass dies nicht der Fall war. Ein erneutes
```sh
$ sudo docker-compose up
```
hat dann immer geholfen.

Wird das Projekt über Docker gestartet, läuft es unter
```sh
localhost:80
```
bzw.
```sh
localhost
```

### Datenbank
Beim Registrieren, Anmelden und Posten bzw. Erhalten von Usernames, Passwörter, Scores etc. werden Anfragen an unsere Datenbank gestellt.

Verwendet wird in diesem Projekt MongoDB. Wenn Docker gestartet ist (und das Projekt läuft), kann man unter einem zweiten Terminal
```sh
sudo docker exec -it mongo mongo
```
eingeben, um an die mongo shell zu gelangen.

Von hier aus kommt man über
```sh
> use tetris
```
an die eigentliche Datenbank.

Diese beinhaltet zwei Collections (*users* und *score*) die automatisch - zusammen mit den jeweiligen Datensätzen - erstellt werden, sobald man sich Registriert und seinen Highscore posten möchte. Falls dies geschehen ist, kann man mit
```sh
> show collections
```
die genannten Collections einsehen.

Der Zugriff auf den Inhalt erfolgt dann mit
```sh
> db.users.find()
```
bzw.
```sh
> db.score.find()
```
### Probleme
Falls das Spiel zu groß oder zu klein abgebildet wird, kann man dies beheben indem man den Zoom des Browsers vergrößert bzw. verkleinert.

Leider ist es mir (Flavio Medina) nicht gelungen, beim Posten des Highscores den angemeldeten Nutzer als Username anzugeben. Somit haben wir uns kurzfristig entschieden, einem *guest* immer das Posten des Highscores zu ermöglichen. JWT werden dennoch vergeben, auch wenn es hier ebenso kleinere Komplikationen gibt.

Mehr dazu können und werden wir bei unserer Präsentation mitteilen.

Dennoch hoffen wir, dass unser Projekt die Anforderungen erfüllt und wünschen Ihnen viel Spaß beim Testen unseres Spiels.

Mit freundlichen Grüßen,

Medina, Flavio

Prica, Philipp

Vuong, Benno
