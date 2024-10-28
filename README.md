My-App.js une application dans Docker
Description
Cette application est un projet Next.js qui a été conteneurisé avec Docker. Elle expose une page d'accueil et une route /apropos qui donne des informations sur l'application.

Prérequis
Avant de commencer, assurez-vous d'avoir les logiciels suivants installés sur votre machine :

Docker : Pour construire et exécuter les conteneurs Docker.
Instructions pour exécuter l'application

bash
cd ton-repo

1. Construire l'image Docker
   Pour construire l'image Docker de l'application, exécutez la commande suivante à la racine du projet (là où se trouve le Dockerfile) :

bash
docker build -t my-next-app .
Cette commande va créer une image Docker à partir des instructions dans le Dockerfile.

2. Exécuter le conteneur
   Une fois l'image construite, vous pouvez lancer un conteneur basé sur cette image. Exécutez la commande suivante :

bash
docker run -d -p 3000:3000 my-next-app
Explications :

-d : Lance le conteneur en mode détaché (en arrière-plan).
-p 3000:3000 : Mappe le port 3000 du conteneur au port 3000 de votre machine locale. Vous pouvez modifier ce port si nécessaire. 3. Accéder à l'application
Après avoir démarré le conteneur, l'application sera accessible dans votre navigateur à l'adresse suivante :

http://localhost:3000
Vous devriez voir la page d'accueil de l'application Next.js.

4. Vérification du conteneur
   Pour vérifier que le conteneur est bien en cours d'exécution, vous pouvez utiliser la commande suivante :

bash
docker ps
Cela vous montrera une liste des conteneurs en cours d'exécution, y compris celui basé sur my-next-app.

5. Arrêter le conteneur
   Si vous souhaitez arrêter le conteneur, utilisez la commande suivante pour identifier l'ID du conteneur :

bash
docker ps
Ensuite, utilisez cette commande pour arrêter le conteneur :

bash
docker stop <container_id>
Résumé des commandes Docker
Voici un récapitulatif des commandes Docker que vous devrez utiliser pour exécuter l'application :

Construire l'image :

bash
docker build -t my-next-app .
Lancer le conteneur :

bash
docker run -d -p 3000:3000 my-next-app
Vérifier que le conteneur est actif :

bash
docker ps
Arrêter le conteneur :

bash
docker stop <container_id>
Notes
Vous pouvez ajuster le port si 3000 est déjà utilisé sur votre machine. Par exemple, pour utiliser le port 4000, exécutez la commande :

bash
docker run -d -p 4000:3000 my-next-app
Ensuite, accédez à l'application via http://localhost:4000.
