AtReal Angular 1 Test
=====================


Résumé
------

Cette petite application de démonstration avec Angular.JS 1 permet de gérer et enregistrer les scores de joueurs pendant une partie de flechettes.

Elle permet de jouer aux jeux suivants :

- 101
- 301
- 501

qui définissent chacun un score de départ pour chaque joueur, le but étant d'atteindre 0 le premier.

Chaque tour, le ou les joueurs ont trois lancés, dont la valeur est décomptée de leur score.
Si, au cours du tour, un joueur atteint 0 exactement, il remporte la partie.
Si, en revanche, un joueur dépasse 0, son score est réinitialisé à celui qu'il possèdait en debut de tour, et passe la main au joueur suivant.


Installation
------------

```
>>> npm install
```


Usage
-----

```
>>> npm start
```

et il suffit ensuite d'ouvrir sur un browser (récent) la [page locale, port 8000](http://localhost:8000)
