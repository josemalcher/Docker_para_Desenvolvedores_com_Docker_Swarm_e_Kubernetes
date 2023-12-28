# Docker para Desenvolvedores (com Docker Swarm e Kubernetes)

https://www.udemy.com/course/docker-para-desenvolvedores-com-docker-swarm-e-kubernetes/

Docker é uma plataforma de código aberto que permite empacotar, distribuir e executar aplicativos em contêineres.Os contêineres são unidades independentes que englobam todos os elementos necessários para a execução de um aplicativo. A principal vantagem do Docker é a portabilidade e a consistência dos aplicativos em diferentes ambientes. Com ele, é possível criar um contêiner que encapsula todo o ambiente de execução do aplicativo, garantindo que ele funcione da mesma maneira em qualquer sistema operacional que o suporte.

## <a name="indice">Índice</a>

1. [Seção 1: Introduction](#parte1)     
2. [Seção 2: Trabalhando com Containers](#parte2)     
3. [Seção 3: Criando imagens e avançando em containers](#parte3)     
4. [Seção 4: Introduzindo volumes aos nossos containers](#parte4)     
5. [Seção 5: Conectando containers com Networks](#parte5)     
6. [Seção 6: Introdução ao YAML](#parte6)     
7. [Seção 7: Gerenciando múltiplos containers com Docker Compose](#parte7)     
8. [Seção 8: Docker Swarm para orquestração](#parte8)     
9. [Seção 9: Orquestração com Kubernetes](#parte9)     
10. [Seção 10: ** EXTRA **: Comandos básicos de terminal](#parte10)     
11. [Seção 11: Conclusão e próximos passos](#parte11)     
---


## <a name="parte1">1 - Seção 1: Introduction</a>

### 1. Introduction
### 2. Apresentação detalhada do curso
### 3. O que é Docker?

![Secao-1-Introduction/img/01-docker-conceitos.png](/Secao-1-Introduction/img/01-docker-conceitos.png)

### 4. Por que Docker?

![Secao-1-Introduction/img/02-docker-conceitos.png](/Secao-1-Introduction/img/02-docker-conceitos.png)

### 5. A Matrix From Hell

![Secao-1-Introduction/img/03-docker-conceitos.png](/Secao-1-Introduction/img/03-docker-conceitos.png)

### 6. Diferença das versões de Docker

![Secao-1-Introduction/img/04-docker-conceitos.png](/Secao-1-Introduction/img/04-docker-conceitos.png)

### 7. Sobre os links de instalação do Docker

Documentação: https://docs.docker.com/

Instalação Windows: https://docs.docker.com/desktop/install/windows-install/

Instalação Linux: https://docs.docker.com/desktop/install/linux-install/

Instalação Mac: https://docs.docker.com/desktop/install/mac-install/

### 8. Instalação Docker Windows
### 9. Instaçalação Docker Mac
### 10. Instalação Docker Linux
### 11. Resolvendo eventuais problemas na instalação
### 12. Instalação do VS Code
### 13. Instalação extensão do Docker no VS Code
### 14. Alternativa ao terminal do Windows
### 15. Rodando um container no Docker

![Secao-1-Introduction/img/05-docker-conceitos.png](/Secao-1-Introduction/img/05-docker-conceitos.png)


```
$ docker run docker/whalesay cowsay Hello_World
Unable to find image 'docker/whalesay:latest' locally
latest: Pulling from docker/whalesay
[DEPRECATION NOTICE] Docker Image Format v1, and Docker Image manifest version 2, schema 1 support will be removed in an upcoming release. Suggest the author of docker.io/docker/whalesay:latest to upgrade the image to the OCI Format, or Docker Image manifest v2, schema 2. More information at https://docs.docker.com/go/deprecated-image-specs/
e190868d63f8: Pull complete 
909cd34c6fd7: Pull complete 
0b9bfabab7c1: Pull complete 
a3ed95caeb02: Pull complete 
00bf65475aba: Pull complete 
c57b6bcc83e3: Pull complete 
8978f6879e2f: Pull complete 
8eed3712d2cf: Pull complete 
Digest: sha256:178598e51a26abbc958b8a2e48825c90bc22e641de3d31e18aaf55f3258ba93b
Status: Downloaded newer image for docker/whalesay:latest
 _____________ 
< Hello_World >
 ------------- 
    \
     \
      \     
                    ##        .            
              ## ## ##       ==            
           ## ## ## ##      ===            
       /""""""""""""""""___/ ===        
  ~~~ {~~ ~~~~ ~~~ ~~~~ ~~ ~ /  ===- ~~~   
       \______ o          __/            
        \    \        __/             
          \____\______/   

```

### 16. Arquivos do curso

- [https://github.com/matheusbattisti/curso_docker](https://github.com/matheusbattisti/curso_docker)

### 17. Slides do Curso
### 18. Quer conteúdo gratuito e de qualidade?

- [https://www.youtube.com/channel/UCDoFiMhpOnLFq1uG4RL4xag?sub_confirmation=1](https://www.youtube.com/channel/UCDoFiMhpOnLFq1uG4RL4xag?sub_confirmation=1)

### 19. Conclusão da seção

[Voltar ao Índice](#indice)

---


## <a name="parte2">2 - Seção 2: Trabalhando com Containers</a>

### 20. Introdução da seção
### 21. O que são containers?
### 22. Container X Imagem
### 23. Rodando um container
### 24. Verificar containers que já foram executados

```
$ docker run ubuntu
Unable to find image 'ubuntu:latest' locally
latest: Pulling from library/ubuntu
5e8117c0bd28: Pull complete

$ docker ps -a     
CONTAINER ID   IMAGE     COMMAND       CREATED          STATUS                      PORTS     NAMES
ba580abfa768   ubuntu    "/bin/bash"   22 seconds ago   Exited (0) 22 seconds ago             nervous_haslett

$ docker container ls   
CONTAINER ID   IMAGE     COMMAND   CREATED   STATUS    PORTS     NAMES

$ docker container ls -a
CONTAINER ID   IMAGE     COMMAND       CREATED          STATUS                      PORTS     NAMES
ba580abfa768   ubuntu    "/bin/bash"   41 seconds ago   Exited (0) 40 seconds ago             nervous_haslett


```

### 25. Rodando container no modo iterativo

```

$ docker run -it node
Unable to find image 'node:latest' locally
latest: Pulling from library/node

Status: Downloaded newer image for node:latest
Welcome to Node.js v21.3.0.
Type ".help" for more information.
> console.log("Olá Mundo");
Olá Mundo
undefined
> 2+2
4

```

### 26. Container X VM
### 27. Rodando container em background (detached)

```
$ docker run nginx   
Unable to find image 'nginx:latest' locally
latest: Pulling from library/nginx

/docker-entrypoint.sh: Configuration complete; ready for start up
2023/12/04 11:39:27 [notice] 1#1: using the "epoll" event method
2023/12/04 11:39:27 [notice] 1#1: nginx/1.25.3
2023/12/04 11:39:27 [notice] 1#1: built by gcc 12.2.0 (Debian 12.2.0-14)
2023/12/04 11:39:27 [notice] 1#1: OS: Linux 5.15.133.1-microsoft-standard-WSL2
2023/12/04 11:39:27 [notice] 1#1: getrlimit(RLIMIT_NOFILE): 1048576:1048576
2023/12/04 11:39:27 [notice] 1#1: start worker processes
2023/12/04 11:39:27 [notice] 1#1: start worker process 29
2023/12/04 11:39:27 [notice] 1#1: start worker process 30

```

```
$ docker run -d nginx
df452cc79f263d41c23fe78a0563fe74d41dcde085693f0cbdc81dc8b1889a64

$ docker ps          
CONTAINER ID   IMAGE     COMMAND                  CREATED          STATUS          PORTS     NAMES
df452cc79f26   nginx     "/docker-entrypoint.…"   31 seconds ago   Up 30 seconds   80/tcp    vigorous_lederberg

```

### 28. Expondo porta de container

```
$ docker run -d -p 80:80 nginx 
db784140efc1ea098c25cb788b0882838aa2dcc413fb2ac7fa7ff93f7fd786d4

$ docker ps                     
CONTAINER ID   IMAGE     COMMAND                  CREATED              STATUS              PORTS                NAMES
db784140efc1   nginx     "/docker-entrypoint.…"   About a minute ago   Up About a minute   0.0.0.0:80->80/tcp   vigilant_chebyshev

$ docker stop vigilant_chebyshev                  
vigilant_chebyshev
```

```
$ docker run -d -p 3000:80 nginx
79a4452b3defe977fe92e46ca1dd7bba8ba992a31b23c21d838a335a691d99f3

$ docker ps                     
CONTAINER ID   IMAGE     COMMAND                  CREATED          STATUS          PORTS                  NAMES
79a4452b3def   nginx     "/docker-entrypoint.…"   29 seconds ago   Up 28 seconds   0.0.0.0:3000->80/tcp   intelligent_varahamihira

$ docker stop intelligent_varahamihira                  
intelligent_varahamihira


```

### 29. Parando containers

```
$ docker ps                           
CONTAINER ID   IMAGE     COMMAND   CREATED   STATUS    PORTS     NAMES

$ docker ps -a
CONTAINER ID   IMAGE     COMMAND                  CREATED         STATUS                          PORTS     NAMES
79a4452b3def   nginx     "/docker-entrypoint.…"   2 minutes ago   Exited (0) About a minute ago             intelligent_varahamihira
db784140efc1   nginx     "/docker-entrypoint.…"   4 minutes ago   Exited (0) 3 minutes ago                  vigilant_chebyshev

```


### 30. Reiniciando containers

```
$ docker ps -a
CONTAINER ID   IMAGE     COMMAND                  CREATED         STATUS                     PORTS     NAMES
79a4452b3def   nginx     "/docker-entrypoint.…"   3 minutes ago   Exited (0) 2 minutes ago             intelligent_varahamihira
db784140efc1   nginx     "/docker-entrypoint.…"   5 minutes ago   Exited (0) 4 minutes ago             vigilant_chebyshev

$ docker start vigilant_chebyshev     
vigilant_chebyshev

$ docker ps                      
CONTAINER ID   IMAGE     COMMAND                  CREATED         STATUS          PORTS                NAMES
db784140efc1   nginx     "/docker-entrypoint.…"   5 minutes ago   Up 18 seconds   0.0.0.0:80->80/tcp   vigilant_chebyshev


```


### 31. Definindo nome para um container

```
$ docker run -d -p 80:80 --name nginx_app nginx
288b3d7a078eb7c6e652a412e1c74320643c2fc0b03748

$ docker ps -a                                 
CONTAINER ID   IMAGE     COMMAND                  CREATED          STATUS                          PORTS                NAMES
288b3d7a078e   nginx     "/docker-entrypoint.…"   7 seconds ago    Up 6 seconds                    0.0.0.0:80->80/tcp   nginx_app
79a4452b3def   nginx     "/docker-entrypoint.…"   15 minutes ago   Exited (0) 15 minutes ago                            intelligent_varahamihira
db784140efc1   nginx     "/docker-entrypoint.…"   17 minutes ago   Exited (0) About a minute ago                        vigilant_chebyshev

$ docker stop nginx_app                  
nginx_app

```

### 32. Acessando os logs de um container

```
$ docker logs nginx_app
/docker-entrypoint.sh: /docker-entrypoint.d/ is not empty, will attempt to perform configuration
/docker-entrypoint.sh: Looking for shell scripts in /docker-entrypoint.d/
/docker-entrypoint.sh: Launching /docker-entrypoint.d/10-listen-on-ipv6-by-default.sh
10-listen-on-ipv6-by-default.sh: info: Getting the checksum of /etc/nginx/conf.d/default.conf
10-listen-on-ipv6-by-default.sh: info: Enabled listen on IPv6 in /etc/nginx/conf.d/default.conf
/docker-entrypoint.sh: Sourcing /docker-entrypoint.d/15-local-resolvers.envsh
/docker-entrypoint.sh: Launching /docker-entrypoint.d/20-envsubst-on-templates.sh
/docker-entrypoint.sh: Launching /docker-entrypoint.d/30-tune-worker-processes.sh
/docker-entrypoint.sh: Configuration complete; ready for start up

```


### 33. Removendo container

```

$ docker ps -a
CONTAINER ID   IMAGE     COMMAND                  CREATED          STATUS                      PORTS     NAMES
288b3d7a078e   nginx     "/docker-entrypoint.…"   3 minutes ago    Exited (0) 3 minutes ago              nginx_app
79a4452b3def   nginx     "/docker-entrypoint.…"   19 minutes ago   Exited (0) 18 minutes ago             intelligent_varahamihira
db784140efc1   nginx     "/docker-entrypoint.…"   21 minutes ago   Exited (0) 4 minutes ago              vigilant_chebyshev

$ docker rm vigilant_chebyshev                 
vigilant_chebyshev

$ docker ps -a                
CONTAINER ID   IMAGE     COMMAND                  CREATED          STATUS                      PORTS     NAMES
288b3d7a078e   nginx     "/docker-entrypoint.…"   4 minutes ago    Exited (0) 3 minutes ago              nginx_app
79a4452b3def   nginx     "/docker-entrypoint.…"   19 minutes ago   Exited (0) 19 minutes ago             intelligent_varahamihira


$ docker run -d -p 80:80 --name nginx_parar_forcado nginx
973be2457ee704a0b0e5408638b9c62d7dddc7cab6c27ea55dbeebea17b3

$ docker ps                                              
CONTAINER ID   IMAGE     COMMAND                  CREATED         STATUS         PORTS                NAMES
973be2457ee7   nginx     "/docker-entrypoint.…"   9 seconds ago   Up 8 seconds   0.0.0.0:80->80/tcp   nginx_parar_forcado

$ docker rm nginx_parar_forcado                          
Error response from daemon: You cannot remove a running container 973be2457ee7040ab6c27ea5f2ce5dbeebea17b3. 
Stop the container before attempting removal or force remove

$ docker rm nginx_parar_forcado -f
nginx_parar_forcado

```


### 34. Conclusão da seção

[Voltar ao Índice](#indice)

---


## <a name="parte3">3 - Seção 3: Criando imagens e avançando em containers</a>

### 35 Introdução da seção
### 36 O que é uma imagem?
### 37 Como escolher uma imagem

```
$ docker run -d -p 80:80 --name meu_apache httpd         
Unable to find image 'httpd:latest' locally
latest: Pulling from library/httpd

```


### 38 Criando a nossa primeira imagem
### 39 Rodando a nossa imagem em um container

Secao-3-CriandoImagensEavancandoEmContainers/aula38/Dockerfile

```dockerfile
From node

WORKDIR /app

COPY package*.json .

RUN npm install

COPY . .

EXPOSE 3000

CMD ["node", "app.js"]
```

```
$ docker build .        
[+] Building 2.4s (10/10) FINISHED                                                                                                                              docker:default
 => [internal] load build definition from Dockerfile                                                                                                                      0.0s
 => => transferring dockerfile: 158B                                                                                                                                      0.0s 
 => [internal] load .dockerignore                                                                                                                                         0.0s 
 => => transferring context: 2B                                                                                                                                           0.0s 
 => [internal] load metadata for docker.io/library/node:latest                                                                                                            0.0s 
 => [1/5] FROM docker.io/library/node                                                                                                                                     0.1s 
 => [internal] load build context                                                                                                                                         0.1s 
 => => transferring context: 2.16MB                                                                                                                                       0.1s 
 => [2/5] WORKDIR /app                                                                                                                                                    0.0s
 => [3/5] COPY package*.json .                                                                                                                                            0.0s 
 => [4/5] RUN npm install                                                                                                                                                 1.9s
 => [5/5] COPY . .                                                                                                                                                        0.1s
 => exporting to image                                                                                                                                                    0.1s
 => => exporting layers                          
```

```
$ docker image ls
REPOSITORY                   TAG       IMAGE ID       CREATED         SIZE
<none>                       <none>    519e37efe7f2   2 minutes ago   1.11GB

```

```
$ docker run -d -p 3000:3000 --name meu_node 519e37efe7f2
5902b38a21d9e169736e765d1468af1d2c89456ca81d47a2f6509406c3fca797

```

### 40 Alterando a nossa imagem
### 41 Cache de camadas
### 42 Fazendo o download de imagens

```
$ docker pull python
Using default tag: latest
latest: Pulling from library/python
90e5e7d8b87a: Already exists                                                                                                                                                   
27e1a8ca91d3: Already exists                                                                                                                                                   
d3a767d1d12e: Already exists                                                                                                                                                   
711be5dc5044: Already exists                                                                                                                                                   
45df5ffe8c3b: Pull complete
cdc2c85f810b: Pull complete
f6a11d2ee0cf: Pull complete
8db447a102db: Pull complete
Digest: sha256:6d7fa2d5653e1d0eb464a672ded01f973e49e4a7ded59703c7bdcf6b92eac736
Status: Downloaded newer image for python:latest

$ docker images
REPOSITORY                   TAG       IMAGE ID       CREATED         SIZE
python                       latest    58a8f3dcd68a   3 days ago      1.02GB

```

```
$ docker run -it python                                   
Python 3.12.1 (main, Dec  9 2023, 00:10:18) [GCC 12.2.0] on linux
Type "help", "copyright", "credits" or "license" for more information.
>>>

```

### 43 Mais informações sobre os comandos

```
$ docker run --help    

Usage:  docker run [OPTIONS] IMAGE [COMMAND] [ARG...]

Create and run a new container from an image

Aliases:
  docker container run, docker run

Options:
      --add-host list                  Add a custom host-to-IP mapping (host:ip)
      --annotation map                 Add an annotation to the container (passed through to the OCI runtime) (default map[])

(...)
```

### 44 Multiplas aplicações do mesmo container

```
$ docker run -d -p 3000:3000 --name meu_node1 53b40ce104f5
2fd3668c4f39fbaab07939211a8ded00e033cb719a3de6a3387c2c2030c0

$ docker run -d -p 4000:3000 --name meu_node2 53b40ce104f5
cc44716c185663b87e8a0493ed0934663e96040838017c5b81ea66bde5ce2e

$ docker run -d -p 5000:3000 --name meu_node3 53b40ce104f5
376dac8b6a6ee18c7b48d6183835d4312047a2cf3ab2ec084e5d50dca9beb7

$ docker ps                                               
CONTAINER ID   IMAGE          COMMAND                  CREATED          STATUS          PORTS                    NAMES
376dac8b6a6e   53b40ce104f5   "docker-entrypoint.s…"   7 seconds ago    Up 6 seconds    0.0.0.0:5000->3000/tcp   meu_node3
cc44716c1856   53b40ce104f5   "docker-entrypoint.s…"   15 seconds ago   Up 14 seconds   0.0.0.0:4000->3000/tcp   meu_node2
2fd3668c4f39   53b40ce104f5   "docker-entrypoint.s…"   22 seconds ago   Up 22 seconds   0.0.0.0:3000->3000/tcp   meu_node1


```

### 45 Nomeando imagens

```
$ docker images
REPOSITORY                   TAG       IMAGE ID       CREATED         SIZE
<none>                       <none>    53b40ce104f5   2 hours ago     1.11GB


$ docker tag 53b40ce104f5 minha_imagem 


$ docker images                       
REPOSITORY                   TAG       IMAGE ID       CREATED         SIZE
minha_imagem                 latest    53b40ce104f5   2 hours ago     1.11GB


$ docker tag 53b40ce104f5 minha_imagem:minhatag  


$ docker images                                
REPOSITORY                   TAG        IMAGE ID       CREATED         SIZE
minha_imagem                 latest     53b40ce104f5   2 hours ago     1.11GB
minha_imagem                 minhatag   53b40ce104f5   2 hours ago     1.11GB

```

### 46 Nomeando imagem no build

```
$ docker build -t meunode_diferente:minhatag_dif .
[+] Building 0.1s (10/10) FINISHED                                                                                                                              docker:default
 => [internal] load .dockerignore                                        
```

```
$ docker images                                           
REPOSITORY                   TAG            IMAGE ID       CREATED         SIZE
meunode_diferente            minhatag_dif   53b40ce104f5   2 hours ago     1.11GB

```

### 47 Reiniciando container com interatividade

```
$ docker ps -a            
CONTAINER ID   IMAGE                            COMMAND                  CREATED              STATUS                        PORTS     NAMES
3ef207eaba81   meunode_diferente:minhatag_dif   "docker-entrypoint.s…"   About a minute ago   Exited (137) 11 seconds ago             zen_fermat


$ docker stop zen_fermat
zen_fermat


$ docker start -i zen_fermat
executando na post: 3000

```

### 48 Removendo imagens

```
$ docker images                               
REPOSITORY                   TAG            IMAGE ID       CREATED         SIZE
meunode_diferente            minhatag_dif   53b40ce104f5   2 hours ago     1.11GB
minha_imagem                 latest         53b40ce104f5   2 hours ago     1.11GB
minha_imagem                 minhatag       53b40ce104f5   2 hours ago     1.11GB
<none>                       <none>         519e37efe7f2   3 hours ago     1.11GB
python                       latest         58a8f3dcd68a   3 days ago      1.02GB


$ docker rmi 58a8f3dcd68a                                  
Untagged: python:latest
Untagged: python@sha256:6d7fa2d53e1d0eb464a672ded01f973e49e4a7ded59703c7bdcf6b92eac736
Deleted: sha256:58a8fcd68a25102665617db6b9cc605dac7e5b84a874c456692513d12c990f
Deleted: sha256:02e6775da0f266197abbcae8cbc8885834c8389127fed9e6d7ea50ea99315b
Deleted: sha256:f1b91c1c68d96eb38f75e8b1a06253d209e440bcf44c621847ec5c4104c9e7
Deleted: sha256:4f0fb38887133f9ce86f04a374cb619a5ac0e8593d1be1fe9325876e870dc6ad
Deleted: sha256:88eb35f1669680c1beba9fd7f283b7c415e27ed1d711dc4575397085f3a754

$ docker rmi meunode_diferente:minhatag_dif
Untagged: meunode_diferente:minhatag_dif


$ docker images                            
REPOSITORY                   TAG        IMAGE ID       CREATED         SIZE
minha_imagem                 latest     53b40ce104f5   2 hours ago     1.11GB
minha_imagem                 minhatag   53b40ce104f5   2 hours ago     1.11GB
<none>                       <none>     519e37efe7f2   3 hours ago     1.11GB

```


### 49 Remoção de imagens e containers não utilizados

```
$ docker system prune --help

Usage:  docker system prune [OPTIONS]

Remove unused data

Options:
  -a, --all             Remove all unused images not just dangling ones
      --filter filter   Provide filter values (e.g. "label=<key>=<value>")
  -f, --force           Do not prompt for confirmation
      --volumes         Prune anonymous volumes


$ docker system prune       
WARNING! This will remove:
  - all stopped containers
  - all networks not used by at least one container
  - all dangling images
  - all dangling build cache

Are you sure you want to continue? [y/N] y
Deleted Containers:
3ef207eaba819f9f454f2fba0132fff0845eacf7bbc284448d147e95a2be18cc


Total reclaimed space: 5.736GB


```


### 50 Removendo container após utilização

```
$ docker run -d -p 3000:3000 --name meu_node --rm minha_imagem
454ba9ce0ae1780defbc762305d8a0a247c08bae66e059f30853a0ce5a866ced


$ docker ps                                                   
CONTAINER ID   IMAGE          COMMAND                  CREATED          STATUS          PORTS                    NAMES
454ba9ce0ae1   minha_imagem   "docker-entrypoint.s…"   20 seconds ago   Up 20 seconds   0.0.0.0:3000->3000/tcp   meu_node


$ docker stop 454ba9ce0ae1          
454ba9ce0ae1


$ docker ps -a            
CONTAINER ID   IMAGE     COMMAND   CREATED   STATUS    PORTS     NAMES


```


### 51 Copiando arquivos do container

```
$ docker run -d -p 3000:3000 --name meu_node --rm minha_imagem
c247d7df3ba00669880e6233f61ac6aadf57391c9ea0347229f8ae37ad894ec1

$ docker ps                                                   
CONTAINER ID   IMAGE          COMMAND                  CREATED          STATUS          PORTS                    NAMES
c247d7df3ba0   minha_imagem   "docker-entrypoint.s…"   37 seconds ago   Up 36 seconds   0.0.0.0:3000->3000/tcp   meu_node

$ docker cp meu_node:/app/app.js ./copia/
Successfully copied 2.05kB to /home/josemalcher/workspaces/Docker_para_Desenvolvedores_com_Docker_Swarm_e_Kubernetes/Secao-3-CriandoImagensEavancandoEmContainers/aula38/copia/

```


### 52 Verificando processamento do container

```
$ docker ps                                                   
CONTAINER ID   IMAGE          COMMAND                  CREATED          STATUS         PORTS                    NAMES
a39792385b61   minha_imagem   "docker-entrypoint.s…"   10 seconds ago   Up 9 seconds   0.0.0.0:3000->3000/tcp   meu_node

$ docker top meu_node                          
UID                 PID                 PPID                C                   STIME               TTY                 TIME                CMD
root                3798                3777                0                   17:22               ?                   00:00:00            node app.js


```

### 53 Inspecionando container

```
$ docker inspect meu_node                                                                                                                                   1        
[
    {
        "Id": "a39792385b6136ddee266895c269a4a82c8803d5b81bbc6f3cb965e4b4e30b11",
        "Created": "2023-12-11T17:22:20.458667148Z",
        "Path": "docker-entrypoint.sh",
        "Args": [
            "node",
            "app.js"
        ],
        "State": {
            "Status": "running",
            "Running": true,
(...)
```

### 54 Verificando processamento do Docker

```
$ docker stats              
CONTAINER ID   NAME       CPU %     MEM USAGE / LIMIT     MEM %     NET I/O       BLOCK I/O   PIDS
a39792385b61   meu_node   0.00%     14.56MiB / 23.39GiB   0.06%     1.16kB / 0B   0B / 0B     10
CONTAINER ID   NAME       CPU %     MEM USAGE / LIMIT     MEM %     NET I/O       BLOCK I/O   PIDS
a39792385b61   meu_node   0.00%     14.56MiB / 23.39GiB   0.06%     1.16kB / 0B   0B / 0B     10
CONTAINER ID   NAME       CPU %     MEM USAGE / LIMIT     MEM %     NET I/O       BLOCK I/O   PIDS

```

### 55 Autenticação no terminal

```
$ docker login         
Log in with your Docker ID or email address to push and pull images from Docker Hub. If you don't have a Docker ID, head over to https://hub.docker.com/ to create one.
You can log in with your password or a Personal Access Token (PAT). Using a limited-scope PAT grants better security and is required for organizations using SSO. Learn more at https://docs.docker.com/go/access-tokens/
Username: 
Password:

```

### 56 Encerrando autenticação

```
$ docker logout
```

### 57 Enviando imagens para o Hub

- docker push josemalcher/nodeteste:tagname

```
$ docker build -t josemalcher/nodeteste .
[+] Building 0.2s (10/10) FINISHED                                                                                                                              docker:default
 => [internal] load .dockerignore                                                                                                                                         0.0s
 => => transferring context: 2B                                                                                                                                           0.0s 
 => [internal] load build definition from Dockerfile                                                                                                                      0.0s 
 => => transferring dockerfile: 158B                                                                                                                                      0.0s 
 => [internal] load metadata for docker.io/library/node:latest                                                                                                            0.0s 
 => [1/5] FROM docker.io/library/node                                                                                                                                     0.0s 
 => [internal] load build context                                                                                                                                         0.0s 
 => => transferring context: 25.43kB                                                                                                                                      0.0s 
 => CACHED [2/5] WORKDIR /app                                                                                                                                             0.0s 
 => CACHED [3/5] COPY package*.json .                                                                                                                                     0.0s 
 => CACHED [4/5] RUN npm install                                                                                                                                          0.0s 
 => [5/5] COPY . .                                                                                                                                                        0.0s 
 => exporting to image                                                                                                                                                    0.0s 
 => => exporting layers                                                                                                                                                   0.0s 
 => => writing image sha256:81aabb446dcfbec32bbef757e82af9d37b2ab27b79a5588cf7ca3e0a0a222afd                                                                              0.0s
 => => naming to docker.io/josemalcher/nodeteste                                                                                                                          0.0s 

```

```
$ docker push josemalcher/nodeteste                  
Using default tag: latest
The push refers to repository [docker.io/josemalcher/nodeteste]
80a01bfd45f7: Pushed
caacfd01ce06: Pushed
0b5ede946b98: Pushed
f6a3a6813717: Pushed
efc82e49b7ad: Mounted from library/node

```

### 58 Atualizando imagens no Hub

```dockerfile
From node
WORKDIR /src
COPY package*.json .
```

```
$ docker build -t josemalcher/nodeteste:novaversao .
[+] Building 2.0s (10/10) FINISHED                                                                                                                              docker:default
 => [internal] load build definition from Dockerfile                                                                                                                      0.0s
 => => transferring dockerfile: 158B                                                                                                                                      0.0s 
 => [internal] load .dockerignore                                                                                                                                         0.0s 
 => => transferring context: 2B                                                                                                                                           0.0s 
 => [internal] load metadata for docker.io/library/node:latest                                                                                                            0.0s 
 => CACHED [1/5] FROM docker.io/library/node                                                                                                                              0.0s 
 => [internal] load build context                                                                                                                                         0.0s 
 => => transferring context: 344B                                                                                                                                         0.0s 
 => [2/5] WORKDIR /src                                                                                                                                                    0.0s 
 => [3/5] COPY package*.json .                                                                                                                                            0.0s 
 => [4/5] RUN npm install                                                                                                                                                 1.7s 
 => [5/5] COPY . .                                                                                                                                                        0.0s
 => exporting to image                                                                                                                                                    0.1s
 => => exporting layers                                                                                                                                                   0.1s
 => => writing image sha256:d317d1e03e0ad633005d55a6f4c78006349b67adf86c74656e2a223830ee97a9                                                                              0.0s
 => => naming to docker.io/josemalcher/nodeteste:novaversao     
```

```
$ docker push josemalcher/nodeteste:novaversao      
The push refers to repository [docker.io/josemalcher/nodeteste]
efa1cd3a7baf: Pushing [==================================================>]  32.26kB
2187b1c060ff: Pushing [==================================================>]  5.794MB
c609aa43d4ee: Pushing [==================================================>]  27.65kB
811de72603c4: Pushing  1.536kB
efc82e49b7ad: Layer already exists
0503e57045c1: Layer already exists

```

### 59 Utilizando nossa imagem

```
$ docker pull josemalcher/nodeteste:novaversao
novaversao: Pulling from josemalcher/nodeteste
Digest: sha256:4ebc142d81b93f1c4505c733276f003a5c7a059d85dc246b9f424610aa4a31b3
Status: Image is up to date for josemalcher/nodeteste:novaversao


$ docker run -d -p 3000:3000 --name minha_imagem --rm josemalcher/nodeteste:novaversao
7664b73f4ae55e193eb133a9d28de00ab33fee3d5785cc16157f6a725d369031

```

### 60 Conclusão da seção

[Voltar ao Índice](#indice)

---


## <a name="parte4">4 - Seção 4: Introduzindo volumes aos nossos containers</a>

### 61 Introdução da seção
### 62 O que são volumes?

![](/imgs/volume_1702472413399.jpg)

### 63 Tipos de volumes

![](/imgs/vol_tipos_1702472459777.jpg)

### 64 Criando o projeto para trabalhar com Volumes

- Secao-4-IntroduzindoVolumes/aula64/Dockerfile

```
$ docker build -t phpmessages .
[+] Building 14.7s (10/10) FINISHED                                                                                                                             docker:default
 => [internal] load .dockerignore                                                                                                                                         0.0s
 => => transferring context: 2B                                                                                                                                           0.0s 
 => [internal] load build definition from Dockerfile                                                                                                                      0.0s 
 => => transferring dockerfile: 147B                                                                                                                                      0.0s 
 => [internal] load metadata for docker.io/library/php:8-apache                                                                                                           2.6s 
 => [auth] library/php:pull token for registry-1.docker.io      



$ docker run -d -p 80:80 --name phpmessages_container phpmessages                     
b1fee503e973a3b9c5484bc90a813cff5942242064d3f3cf8c670d31c9b3e



$ docker ps
CONTAINER ID   IMAGE         COMMAND                  CREATED          STATUS          PORTS                NAMES
b1fee503e973   phpmessages   "docker-php-entrypoi…"   58 seconds ago   Up 57 seconds   0.0.0.0:80->80/tcp   phpmessages_container

```


### 65 O problema da persistência de dados
### 66 Volumes anônimos

![](/imgs/vol_anonimo_1702487220704.jpg)

```
$ docker run -d -p 80:80 --name phpmessages_container --rm -v /data phpmessages          
b29547ba59e306c7586fe7d79f6b34e1b815512f199854080e44223e0a156236


$ docker inspect phpmessages_container                                         
[
    {
        ],
            "Image": "phpmessages",
            "Volumes": {
                "/data": {}
            },
            "WorkingDir": "/var/www/html",
(...)


$ docker volume ls                       
DRIVER    VOLUME NAME
local     0c0d219608ef3fe5a386ed2fdaf993928d5c180f9e9b47ab4dde922072fa0d2f
```

### 67 Volumes nomeados

![](/imgs/vol_name_1702487700695.jpg)

```
$ docker ps                        
CONTAINER ID   IMAGE     COMMAND   CREATED   STATUS    PORTS     NAMES



$ docker run -d -p 80:80 --name phpmessages_container -v phpvolume:/var/www/html/messages --rm  phpmessages
9d6df0a1515b2118ba2add81c41c2b800cbb96be33f00e02dca6781985227c55



$ docker volume ls                                                                                         
DRIVER    VOLUME NAME
local     phpvolume

```

### 68 Bind mounts

![](/imgs/vol_bind_1702488076847.jpg)

```
$ docker run -d -p 80:80 --name phpmessages_container -v $PWD/messages:/var/www/html/messages --rm  phpmessages
be3d09f93320905d8b514cfdce48059e89711c88666a577d6a49f2e2a8fba740

```

### 69 O poder extra do Bind Mount

![](/imgs/bind_mount_1702905910433.png)

```
$ docker run -d -p 80:80 --name phpmessages_container -v $PWD:/var/www/html --rm  phpmessages
aad4aa35a12e35f9e808fa2bddf9486f389adc2ae9ac3901e99035a2a

```

### 70 Criando volumes manualmente

![](/imgs/create_vol1_1702906216687.png)

```
$ docker volume ls
DRIVER    VOLUME NAME
local     admin-filamentv2_sail-mysql
local     api-03-app_sail-mysql


$ docker volume create volume_teste01
volume_teste01

$ docker volume ls            
DRIVER    VOLUME NAME
local     volume_teste01
local     volume_teste02


$ docker run -d -p 80:80 --name phpmessages_container -v volume_teste2:/var/www/html --rm  phpmessages
df5136615074546636e8c6781c5ab75d2104e4e0e94e300928cb4a94c98

```

### 71 Listando volumes

![](/imgs/vol_ls1702907178281.jpg)

```
$ docker volume ls                   
DRIVER    VOLUME NAME
local     volume_teste01
local     volume_teste2
local     volume_teste02

$ docker run -d -p 80:80 --name phpmessages_container -v --rm  phpmessages
01c20f52689f33564fdf923b878029cd780bd711cdc069297afe1f62f3197d79


$ docker volume ls                                                        
DRIVER    VOLUME NAME
local     c8be262721290d3497a79253ee393e77448e80c7e3f5e08525209110d5c05c5e


```

### 72 Inspecionando volumes

![](/imgs/check_vol1702907322815.jpg)


```
$ docker volume inspect phpvolume
[
    {
        "CreatedAt": "2023-12-13T17:16:57Z",
        "Driver": "local",
        "Labels": null,
        "Mountpoint": "/var/lib/docker/volumes/phpvolume/_data",
        "Name": "phpvolume",
        "Options": null,
        "Scope": "local"
    }
]

```


### 73 Removendo volumes

![](/imgs/remove_vol_1702907456377.jpg)

```
$ docker volume ls
DRIVER    VOLUME NAME
local     volume_teste01
local     volume_teste2
local     volume_teste02


$ docker volume rm volume_teste01
volume_teste01

```



### 74 Remoção de volumes em massa

![](/imgs/remove_vol_mass_1702907593743.jpg)

```
$ docker volume ls                       
DRIVER    VOLUME NAME
local     volume_teste2
local     volume_teste02

$ docker volume prune
WARNING! This will remove anonymous local volumes not used by at least one container.
Are you sure you want to continue? [y/N] 
Total reclaimed space: 0B

```

### 75 Volume somente leitura

![](/imgs/vol_leitura_1702910218827.jpg)

```
$ docker run -d -p 80:80 --name phpmessages_container -v phpvolume:/var/www/html:ro --rm  phpmessages
01716987852ac35cd33c3ab07df479dfcc817237d8aa95e22

```




### 76 Conclusão da seção

[Voltar ao Índice](#indice)

---


## <a name="parte5">5 - Seção 5: Conectando containers com Networks</a>

### 77 Introdução da seção
### 78 Erro ao instalar python-pip

```

E: Package 'python-pip' has no installation candidate

Caso tenham o mesmo problema: basta trocar python-pip para python3-pip

```

### 79 O que são networks?

![](/imgs/networks01.png)

### 80 Tipos de conexão

![](/imgs/networks02.png)

### 81 Tipos de driver

![](/imgs/networks03.png)

### 82 Listando networks

![](/imgs/networks04.png)

```
$ docker network ls                
NETWORK ID     NAME      DRIVER    SCOPE
3b2a2576962a   bridge    bridge    local
8110e3435b0c   host      host      local
7f0a4681e997   none      null      local

```

### 83 Criando redes

![](/imgs/networks05.png)

```
$ docker network create minharedeteste
794883b7e861662801ae57ad16247b4f8f7479741316a0eebefdb2bdce9c0718

$ docker network ls                   
NETWORK ID     NAME             DRIVER    SCOPE
3b2a2576962a   bridge           bridge    local
8110e3435b0c   host             host      local
794883b7e861   minharedeteste   bridge    local
7f0a4681e997   none             null      local

$ docker network create -d macvlan minhamacvlanteste
2a0f3f25fee9fe0f8b54c5f0724923aef0130b54ba2a935e9d9b79f5aa4a1781

$ docker network ls                                      
NETWORK ID     NAME                DRIVER    SCOPE
3b2a2576962a   bridge              bridge    local
8110e3435b0c   host                host      local
2a0f3f25fee9   minhamacvlanteste   macvlan   local
794883b7e861   minharedeteste      bridge    local
7f0a4681e997   none                null      local

```

### 84 Removendo redes

![](/imgs/networks06.png)

```
$ docker network rm minhamacvlanteste
minhamacvlanteste

$ docker network rm minharedeteste                 
minharedeteste

$ docker network ls                  
NETWORK ID     NAME      DRIVER    SCOPE
3b2a2576962a   bridge    bridge    local
8110e3435b0c   host      host      local
7f0a4681e997   none      null      local

```

### 85 Removendo redes não utilizadas

![](/imgs/networks07.png)

```
$ docker network ls       
NETWORK ID     NAME      DRIVER    SCOPE
3b2a2576962a   bridge    bridge    local
8110e3435b0c   host      host      local
7f0a4681e997   none      null      local
9b6677c8991f   t1        bridge    local
5ae2830a02c8   t2        bridge    local
0e12541fc7ca   t3        bridge    local

$ docker network prune
WARNING! This will remove all custom networks not used by at least one container.
Are you sure you want to continue? [y/N] y
Deleted Networks:
t1
t2
t3


```

### 86 Instalando o Postman
### 87 Conexão externa

![](/imgs/networks08.png)

```dockerfile
FROM python:3

RUN apt-get update -y && \
    apt-get install -y python3-pip python3-dev

WORKDIR /app

RUN pip install Flask
RUN pip install requests

COPY . .

EXPOSE 5000

CMD ["python3", "./app.py"]
```

```python
import flask
from flask import request, json, jsonify
import requests

app = flask.Flask(__name__)
app.config["DEBUG"] = True

@app.route("/", methods=["GET"])
def index():
    data = requests.get('https://randomuser.me/api')
    return jsonify(data.json())

if __name__ == "__main__":
    app.run(host="0.0.0.0",debug =True, port = "5000")
```

```
$ docker run -d -p 5000:5000 --name flaskexternocontainer --rm flaskexterna
```

### 88 Conexão com máquina host

![/imgs/networks09.png](/imgs/networks09.png)

```python
import flask
from flask import request, json, jsonify
import requests
import flask_mysqldb
from flask_mysqldb import MySQL

app = flask.Flask(__name__)
app.config["DEBUG"] = True

app.config['MYSQL_HOST'] = 'host.docker.internal'
app.config['MYSQL_USER'] = 'root'
app.config['MYSQL_PASSWORD'] = ''
app.config['MYSQL_DB'] = 'flaskhost'

mysql = MySQL(app)

@app.route("/", methods=["GET"])
def index():
  data = requests.get('https://randomuser.me/api')
  return data.json()

@app.route("/inserthost", methods=['POST'])
def inserthost():
  data = requests.get('https://randomuser.me/api').json()
  username = data['results'][0]['name']['first']

  cur = mysql.connection.cursor()
  cur.execute("""INSERT INTO users(name) VALUES(%s)""", (username,))
  mysql.connection.commit()
  cur.close()

  return username

if __name__ == "__main__":
  app.run(host="0.0.0.0", debug=True, port="5000")
```

```dockerfile
FROM python:3

RUN apt-get update -y && \
    apt-get install -y python3-pip python3-dev

WORKDIR /app

RUN pip install Flask requests flask_mysqldb

COPY . .

EXPOSE 5000

CMD ["python", "./app.py"]
```

```
$ docker run -d -p 5000:5000 --name flaskexternocontainer --rm flaskhost   
d3d5e585294c1d1eb80602d6e45c5cb4c5f6bbb0d72fedc91328c8bbd
```

### 89 Conexão entre containers

![/imgs/networks010.png](/imgs/networks010.png)

- [Secao-5-Conectando_containers_com_Networks/3_conn_containers](Secao-5-Conectando_containers_com_Networks/3_conn_containers)

```
$ cd mysql

$ docker build -t mysqlnetworkapi .                                     
[+] Building 17.5s (8/8) FINISHED                
```

```
$ docker network create flasknetwork
a4b2ea44890e37cd9f6cc2d695b2d81c760f31015d7d7ae0d208d2ab922c01

$ docker network ls                 
NETWORK ID     NAME           DRIVER    SCOPE
8f74cec68b60   bridge         bridge    local
a4b2ea44890e   flasknetwork   bridge    local
8110e3435b0c   host           host      local
7f0a4681e997   none           null      local

```

```
$ docker run -d -p 3306:3306 --name mysql_api_container --rm --network flasknetwork -e MYSQL_ALLOW_EMPTY_PASSWORD=True mysqlnetworkapi
34da1dbe6ede5bd3db1d530085a9ce1911facdf655bd194828458f2cc
```

```
$ cd flask   

$ docker build -t flaskapinetwork .                                                                                                   
[+] Building 2.2s (11/11) FINISHED     


$ docker run -d -p 5000:5000 --name flask_api_container --rm --network flasknetwork flaskapinetwork
53ffff50ab0ad99a2d1b4bfa491a9700470b683b4acd2628dd6b61d17c12f8
```

### 90 Conectando um container a uma rede

![/imgs/networks011.png](/imgs/networks011.png)

```
$ docker run -d -p 3306:3306 --name mysql_api_container --rm --network flasknetwork -e MYSQL_ALLOW_EMPTY_PASSWORD=True mysqlnetworkapi
ae60f77c00e226d8ee50b9771de5faf55b088d3aaf612ba41052b96f93905d

$ docker run -d -p 5000:5000 --name flask_api_container --rm flaskapinetwork
4a6e7a2bef53aedad6b15f9c482e10a6382cb5107d13842d9076b8bddcc8c1

$ docker ps                                                                 
CONTAINER ID   IMAGE             COMMAND                  CREATED              STATUS              PORTS                               NAMES
4a6e7a2bef53   flaskapinetwork   "python ./app.py"        About a minute ago   Up About a minute   0.0.0.0:5000->5000/tcp              flask_api_container
ae60f77c00e2   mysqlnetworkapi   "docker-entrypoint.s…"   3 minutes ago        Up 3 minutes        0.0.0.0:3306->3306/tcp, 33060/tcp   mysql_api_container

$ docker network ls
NETWORK ID     NAME           DRIVER    SCOPE
8f74cec68b60   bridge         bridge    local
a4b2ea44890e   flasknetwork   bridge    local

$ docker network connect flasknetwork 4a6e7a2bef53

```

### 91 Desconectando um container

![/imgs/networks012.png](/imgs/networks012.png)

```
$ docker network ls                               
NETWORK ID     NAME           DRIVER    SCOPE
8f74cec68b60   bridge         bridge    local
a4b2ea44890e   flasknetwork   bridge    local
8110e3435b0c   host           host      local
7f0a4681e997   none           null      local

$ docker ps        
CONTAINER ID   IMAGE             COMMAND                  CREATED          STATUS          PORTS                               NAMES
4a6e7a2bef53   flaskapinetwork   "python ./app.py"        30 minutes ago   Up 30 minutes   0.0.0.0:5000->5000/tcp              flask_api_container
ae60f77c00e2   mysqlnetworkapi   "docker-entrypoint.s…"   32 minutes ago   Up 32 minutes   0.0.0.0:3306->3306/tcp, 33060/tcp   mysql_api_container

$ docker network disconnect flasknetwork 4a6e7a2bef53

```

### 92 Inspecionando redes

![/imgs/networks013.png](/imgs/networks013.png)

```
$ docker network inspect flasknetwork
[
    {
        "Name": "flasknetwork",
        "Id": "a4b2ea44890e37cd9f6cc2d5b2d81a0c760f31015d7d7ae0d208d2ab922c01",
        "Created": "2023-12-26T19:28:23.422050992Z",
        "Scope": "local",
        "Driver": "bridge",
        "EnableIPv6": false,
        "IPAM": {
            "Driver": "default",
            "Options": {},
            "Config": [
                {
                    "Subnet": "172.18.0.0/16",
                    "Gateway": "172.18.0.1"
                }
            ]
        },
        "Internal": false,
        "Attachable": false,
        "Ingress": false,
        "ConfigFrom": {
            "Network": ""
        },
        "ConfigOnly": false,
        "Containers": {
            "ae60f77c00e226d8ee50b9771de5faf55b088d3aaf612ba452b96f93905da3": {
                "Name": "mysql_api_container",
                "EndpointID": "f35450c7007752560c4791bf2298a7c84235f077df258dc960156d42d7dbf2",
                "MacAddress": "02:42:ac:12:00:03",
                "IPv4Address": "172.18.0.3/16",
                "IPv6Address": ""
            }
        },
        "Options": {},
        "Labels": {}
    }
]

```

### 93 Conclusão da seção

[Voltar ao Índice](#indice)

---


## <a name="parte6">6 - Seção 6: Introdução ao YAML</a>

### 94 Introdução da seção
### 95 O que é YAML?

![/imgs/yaml_01.png](/imgs/yaml_01.png)

### 96 Criando nosso arquivo YAML

![/imgs/yaml_02.png](/imgs/yaml_02.png)

### 97 Espaçamento e identação

![/imgs/yaml_03.png](/imgs/yaml_03.png)

### 98 Comentários no YAML
### 99 Dados numéricos
### 100 Strings no YAML
### 101 Valores nulos
### 102 Booleanos
### 103 Listas
### 104 Dicionários
### 105 Conclusão da seção

- [/Secao-6-Introducao_ao_YAML/teste.yaml](/Secao-6-Introducao_ao_YAML/teste.yaml)

```yaml
# Instruções para o programa
nome: "Matheus"
idade: 30 # Esta é a idade do usuário

# Este objeto descreve o nosso projeto
objeto1:
  versao: 2
  arquivo: "teste.txt"

versao: 2
versao_completa: 3.14

string_sem_aspas: Digite um texto aqui
texto: "Este tambem e um texto valido para o YAML"

nulo: ~
nulo_dois: null

verdadeiro: True
verdadeiro_dois: On

falso: False
falso_dois: Off

lista: [1, 2, 3, 4, 5]

lista_dois:
  - "teste"
  - 10
  - outro teste
  - True

obj: {a: 1, b: 2, c: 3, objeto_interno: {a: 1}}

objeto:
  a: 1
  b: 2
  objeto_interno:
    x: 2
```

[Voltar ao Índice](#indice)

---


## <a name="parte7">7 - Seção 7: Gerenciando múltiplos containers com Docker Compose</a>



[Voltar ao Índice](#indice)

---


## <a name="parte8">8 - Seção 8: Docker Swarm para orquestração</a>



[Voltar ao Índice](#indice)

---


## <a name="parte9">9 - Seção 9: Orquestração com Kubernetes</a>



[Voltar ao Índice](#indice)

---


## <a name="parte10">10 - Seção 10: ** EXTRA **: Comandos básicos de terminal</a>



[Voltar ao Índice](#indice)

---


## <a name="parte11">11 - Seção 11: Conclusão e próximos passos</a>



[Voltar ao Índice](#indice)

---