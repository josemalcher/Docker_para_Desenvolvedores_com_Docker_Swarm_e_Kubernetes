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

### 106 Introdução da seção
### 107 O que é o Docker Compose?

![/imgs/composer_1.png](/imgs/composer_1.png)

### 108 Instalando o Compose no Linux

![/imgs/composer_108.jpeg](/imgs/composer_108.jpeg)

```
$ docker-composer --version
zsh: command not found: docker-composer

$ docker compose version
Docker Compose version v2.23.3-desktop.2

$ docker --version
Docker version 24.0.7, build afdd53b

$  docker version
Client: Docker Engine - Community
 Cloud integration: v1.0.35+desktop.5
 Version:           24.0.7
 API version:       1.43
 Go version:        go1.20.10
 Git commit:        afdd53b
 Built:             Thu Oct 26 09:08:17 2023
 OS/Arch:           linux/amd64
 Context:           default

Server: Docker Desktop
 Engine:
  Version:          24.0.7
  API version:      1.43 (minimum version 1.12)
  Go version:       go1.20.10
  Git commit:       311b9ff
  Built:            Thu Oct 26 09:08:02 2023
  OS/Arch:          linux/amd64
  Experimental:     false
 containerd:
  Version:          1.6.25
  GitCommit:        f198ac764191ef7b3b06d8a2eeb5c
 runc:
  Version:          1.1.10
  GitCommit:        v1.1.10-0-g18a0cb0
 docker-init:
  Version:          0.19.0
  GitCommit:        de40ad0

```

### 109 Criando nosso arquivo de Compose

![/imgs/composer_109.png](/imgs/composer_109.png)

```yaml
version: '3.3'

services:
  db: # Container de MySQL
    image: mysql:5.7 # FROM mysql:5.7
    volumes:
      - db_data:/var/lib/mysql
    restart: always
    environment:
      MYSQL_ROOT_PASSWORD: wordpress
      MYSQL_DATABASE: wordpress
      MYSQL_USER: matheus
      MYSQL_PASSWORD: secret

  wordpress:
    depends_on:
      - db
    image: wordpress:latest
    ports:
      - "8000:80"
    restart: always
    environment:
      WORDPRESS_DB_HOST: db:3306
      WORDPRESS_DB_USER: matheus
      WORDPRESS_DB_PASSWORD: secret
      WORDPRESS_DB_NAME: wordpress
volumes:
  db_data: {}
```

### 110 Rodando o Compose

![/imgs/composer_110.png](/imgs/composer_110.png)

```
$ docker-compose up
[+] Running 34/2
 ✔ wordpress 21 layers [⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿]      0B/0B      Pulled                                                                                                                                                                 20.2s 
 ✔ db 11 layers [⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿]      0B/0B      Pulled                                                                                                                                                                                  25.8s 
[+] Running 4/4
 ✔ Network 1_create_composer_default        Created                                                                                                                                                                                    0.1s 
 ✔ Volume "1_create_composer_db_data"       Created                                                                                                                                                                                    0.0s 
 ✔ Container 1_create_composer-db-1         Created                                                                                                                                                                                    0.1s 
 ✔ Container 1_create_composer-wordpress-1  Created                                                                                                                                                                                    0.1s 
Attaching to db-1, wordpress-1

```

### 111 Rodando o Compose em background

![/imgs/composer_111.png](/imgs/composer_111.png)

```
$ docker-compose up -d
[+] Running 3/3
 ✔ Network 1_create_composer_default        Created                                                                                                                                                                                    0.0s 
 ✔ Container 1_create_composer-db-1         Started                                                                                                                                                                                    0.1s 
 ✔ Container 1_create_composer-wordpress-1  Started                                                                                                                                                                                    0.1s 

```

### 112 Parando o Compose

![/imgs/composer_112.png](/imgs/composer_112.png)

```
$ docker-compose down 
[+] Running 3/3
 ✔ Container 1_create_composer-wordpress-1  Removed                                                                                                                                                                                    1.3s 
 ✔ Container 1_create_composer-db-1         Removed                                                                                                                                                                                    1.4s 
 ✔ Network 1_create_composer_default        Removed   
```

### 113 Variáveis de ambiente no Compose

![/imgs/composer_113.png](/imgs/composer_113.png)

```
version: '3.3'

services:
  db: # Container de MySQL
    image: mysql:5.7 # FROM mysql:5.7
    volumes:
      - db_data:/var/lib/mysql
    restart: always
    env_file:
      - ./config/db.env

  wordpress:
    depends_on:
      - db
    image: wordpress:latest
    ports:
      - "8000:80"
    restart: always
    env_file:
      - ./config/wp.env

volumes:
  db_data: {}

```

### 114 Redes no Compose

![/imgs/composer_114.png](/imgs/composer_114.png)

```
version: '3.3'

services:
  db: # Container de MySQL
    image: mysql:5.7 # FROM mysql:5.7
    volumes:
      - db_data:/var/lib/mysql
    restart: always
    env_file:
      - ./config/db.env
    networks:
      - backend

  wordpress:
    depends_on:
      - db
    image: wordpress:latest
    ports:
      - "8000:80"
    restart: always
    env_file:
      - ./config/wp.env
    networks:
      - backend

volumes:
  db_data: {}
networks:
  backend:
    driver: bridge
```

### 115 Criando o Compose do nosso projeto

```
version: '3.3'

services:
  db:
    image: mysqlcompose
    restart: always
    env_file:
      - ./config/db.env
    ports:
      - "3306:3306"
    networks:
      - dockercompose
    volumes:
      - ./mysql/schema.sql:/docker-entrypoint-initdb.d/init.sql

  flask:
    depends_on:
      - db
    image: flaskcompose
    ports:
      - "5000:5000"
    restart: always
    networks:
      - dockercompose

networks:
  dockercompose:
```

### 116 Build de imagens no Compose

```
version: '3.3'

services:
  db:
    build: ./mysql/
    restart: always
    env_file:
      - ./config/db.env
    ports:
      - "3306:3306"
    networks:
      - dockercompose
    volumes:
      - ./mysql/schema.sql:/docker-entrypoint-initdb.d/init.sql

  flask:
    depends_on:
      - db
    build: ./flask/
    ports:
      - "5000:5000"
    restart: always
    networks:
      - dockercompose

networks:
  dockercompose:
```

```
$ docker-compose up -d
[+] Running 3/3
 ✔ Network 4_projeto_dockercompose  Created                                                                                                                                                                            0.0s 
 ✔ Container 4_projeto-db-1         Started                                                                                                                                                                            0.1s 
 ✔ Container 4_projeto-flask-1      Started   
```

### 117 Volume bind mount no Compose

![/imgs/composer_117.png](/imgs/composer_117.png)

```
  flask:
    depends_on:
      - db
    build: ./flask/
    ports:
      - "5000:5000"
    restart: always
    volumes:
      - /flask/:/app"
    networks:
      - dockercompose

networks:
  dockercompose:
```

### 118 Verificando serviços do Compose

![/imgs/composer_118.png](/imgs/composer_118.png)

```
$ docker-compose ps 
NAME      IMAGE     COMMAND   SERVICE   CREATED   STATUS    PORTS

```

### 119 Conclusão da seção

[Voltar ao Índice](#indice)

---


## <a name="parte8">8 - Seção 8: Docker Swarm para orquestração</a>

### 120 Introdução da seção
### 121 O que é orquestração de containers?

![/imgs/swarm_120.png](/imgs/swarm_120.png)

### 122 O que é Docker Swarm?

![/imgs/swarm_122.png](/imgs/swarm_122.png)

### 123 Conceitos fundamentais do Swarm

![/imgs/swarm_123.png](/imgs/swarm_123.png)

### 124 Maneiras de executar o Swarm

![/imgs/swarm_124.png](/imgs/swarm_124.png)

### 125 Setup do Swarm na AWS
### 126 Instalando Docker na AWS e rodando o Swarm
### 127 Setup do Swarm no Docker Labs

```
[node1] (local) root@192.168.0.13 ~
$ docker swarm init --advertise-addr 192.168.0.18
Swarm initialized: current node (uwjloa54th2ybydfqjjkmklt4) is now a manager.

To add a worker to this swarm, run the following command:

    docker swarm join --token SWMTKN-1-1etwqwavbq9yjzwa5xxw3r3mk6aarha8crabuuerf8x4f89vav-0vg39tbe4ge5ezany4ay73fnu 192.168.0.13:2377

To add a manager to this swarm, run 'docker swarm join-token manager' and follow the instructions.

```

### 128 Inicializando o Swarm


![/imgs/swarm_128.png](/imgs/swarm_128.png)

```
$ docker swarm leave -f
Node left the swarm.
```

### 129 Listando todos os Nodes

![/imgs/swarm_129.png](/imgs/swarm_129.png)

```
[node1] (local) root@192.168.0.13 ~
$ docker node ls
ID                            HOSTNAME   STATUS    AVAILABILITY   MANAGER STATUS   ENGINE VERSION
uwjloa54th2ybydfqjjkmklt4 *   node1      Ready     Active         Leader           24.0.7
```

### 130 Adicionando máquinas ao Swarm

![/imgs/swarm_130.png](/imgs/swarm_130.png)

```
Token entregue

docker swarm join --token SWMTKN-1-12lwga6e5t5dg9j5av0mjhhqs7qahaeon0wbt8b61cj3pp-ab9twa9rigy8rybtl9jet399v 192.168.0.18:2377
```

```
$ docker node ls
ID                            HOSTNAME   STATUS    AVAILABILITY   MANAGER STATUS   ENGINE VERSION
2r9nkedwnoqxv0smrvuuj2uoh *   node1      Ready     Active         Leader           24.0.7
3xc5z9xaharluhc2hjt4ue13n     node2      Ready     Active                          24.0.7
vufqbwhqcsplsi5zvcnj6q2pt     node3      Ready     Active                          24.0.7
```

### 131 Subindo serviço no Swarm

![/imgs/swarm_131.png](/imgs/swarm_131.png)

```
$ docker service create --name nginxswarm -p 80:80 nginx
roy1al2uqszmkjfx8u9sqzzon
overall progress: 1 out of 1 tasks 
1/1: running   [==================================================>] 
verify: Service converged 
[node1] (local) root@192.168.0.18 ~

$ docker ps
CONTAINER ID   IMAGE          COMMAND                  CREATED          STATUS          PORTS     NAMES
35f46efa5853   nginx:latest   "/docker-entrypoint.…"   22 seconds ago   Up 21 seconds   80/tcp    nginxswarm.1.zc76jkvjg2xv4f9wwvpqnmj64
```


### 132 Verificar serviços rodando no Swarm

![/imgs/swarm_132.png](/imgs/swarm_132.png)

```
[node1] (local) root@192.168.0.18 ~
$ docker node ls
ID                            HOSTNAME   STATUS    AVAILABILITY   MANAGER STATUS   ENGINE VERSION
2r9nkedwnoqxv0smrvuuj2uoh *   node1      Ready     Active         Leader           24.0.7
3xc5z9xaharluhc2hjt4ue13n     node2      Ready     Active                          24.0.7
vufqbwhqcsplsi5zvcnj6q2pt     node3      Ready     Active                          24.0.7


[node1] (local) root@192.168.0.18 ~
$ docker service ls
ID             NAME         MODE         REPLICAS   IMAGE          PORTS
roy1al2uqszm   nginxswarm   replicated   1/1        nginx:latest   *:80->80/tcp
```

### 133 Removendo serviços

![/imgs/swarm_133.png](/imgs/swarm_133.png)

```
[node1] (local) root@192.168.0.18 ~
$ docker service ls
ID             NAME         MODE         REPLICAS   IMAGE          PORTS
roy1al2uqszm   nginxswarm   replicated   1/1        nginx:latest   *:80->80/tcp

[node1] (local) root@192.168.0.18 ~
$ docker service rm roy1
roy1

[node1] (local) root@192.168.0.18 ~
$ docker service ls
ID        NAME      MODE      REPLICAS   IMAGE     PORTS
```

### 134 Replicando serviços

![/imgs/swarm_134.png](/imgs/swarm_134.png)


```
[node1] (local) root@192.168.0.18 ~
$ docker service ls
ID             NAME         MODE         REPLICAS   IMAGE          PORTS
weac39ei5g3v   nginxswarm   replicated   1/1        nginx:latest   *:80->80/tcp

[node1] (local) root@192.168.0.18 ~
$ docker service rm weac
weac

[node1] (local) root@192.168.0.18 ~
$ docker service ls
ID        NAME      MODE      REPLICAS   IMAGE     PORTS


[node1] (local) root@192.168.0.18 ~
$ docker service create --name nginxreplicas --replicas 3 -p 80:80 nginx
o7pxop46xmb3s6hpno930hoqe
overall progress: 3 out of 3 tasks 
1/3: running   [==================================================>] 
2/3: running   [==================================================>] 
3/3: running   [==================================================>] 
verify: Service converged 


[node1] (local) root@192.168.0.18 ~
$ docker service ls
ID             NAME            MODE         REPLICAS   IMAGE          PORTS
o7pxop46xmb3   nginxreplicas   replicated   3/3        nginx:latest   *:80->80/tcp
```

```
[node3] (local) root@192.168.0.16 ~
$ docker ps
CONTAINER ID   IMAGE          COMMAND                  CREATED          STATUS          PORTS     NAMES
bbc6c43ade22   nginx:latest   "/docker-entrypoint.…"   50 seconds ago   Up 49 seconds   80/tcp    nginxreplicas.3.vth966v9s9jq10u7grdxqa8j9
```

### 135 Testando a orquestração do Swarm

![/imgs/swarm_135.png](/imgs/swarm_135.png)

```
[node3] (local) root@192.168.0.16 ~
$ docker ps
CONTAINER ID   IMAGE          COMMAND                  CREATED         STATUS         PORTS     NAMES
bbc6c43ade22   nginx:latest   "/docker-entrypoint.…"   3 minutes ago   Up 3 minutes   80/tcp    nginxreplicas.3.vth966v9s9jq10u7grdxqa8j9

[node3] (local) root@192.168.0.16 ~
$ docker rm bbc6
Error response from daemon: You cannot remove a running container bbc6c43ade22346c8f8405b4e0077d69c8db3928cab315c2ab0f212e9b328f3e. Stop the container before attempting removal or force remove

[node3] (local) root@192.168.0.16 ~
$ docker rm bbc6 -f
bbc6

[node3] (local) root@192.168.0.16 ~
$ docker ps
CONTAINER ID   IMAGE     COMMAND   CREATED   STATUS    PORTS     NAMES

[node3] (local) root@192.168.0.16 ~
$ docker ps
CONTAINER ID   IMAGE          COMMAND                  CREATED         STATUS         PORTS     NAMES
4a74eb270414   nginx:latest   "/docker-entrypoint.…"   9 seconds ago   Up 2 seconds   80/tcp    nginxreplicas.3.ef79fss1tzdpa8rhddb06bzsq
```

### 136 Recuperando o token do Manager

![/imgs/swarm_136.png](/imgs/swarm_136.png)

```
[node1] (local) root@192.168.0.18 ~
$ docker swarm join-token manager
To add a manager to this swarm, run the following command:

    docker swarm join --token SWMTKN-1-2drkgtxwk5abtdygnix0l8tk27z86lf65ciiutztowofvhe71j-6vqsbzd6nc1p8zqb9vcf2wmrz 192.168.0.18:2377

```

### 137 Mais informações sobre o Swarm

![/imgs/swarm_137.png](/imgs/swarm_137.png)

```
[node1] (local) root@192.168.0.18 ~
$ docker info
Client:
 Version:    24.0.7
 Context:    default
 Debug Mode: false
 Plugins:
  buildx: Docker Buildx (Docker Inc.)
    Version:  v0.11.2
    Path:     /usr/local/libexec/docker/cli-plugins/docker-buildx
  compose: Docker Compose (Docker Inc.)
    Version:  v2.23.0
    Path:     /usr/local/libexec/docker/cli-plugins/docker-compose
  scout: Docker Scout (Docker Inc.)
    Version:  v1.0.9
    Path:     /usr/lib/docker/cli-plugins/docker-scout

Server:
 Containers: 1
  Running: 1
  Paused: 0
  Stopped: 0
 Images: 1
 Server Version: 24.0.7
 Storage Driver: overlay2
  Backing Filesystem: xfs
  Supports d_type: true
  Using metacopy: false
  Native Overlay Diff: true
  userxattr: false
 Logging Driver: json-file
 Cgroup Driver: cgroupfs
 Cgroup Version: 1
 Plugins:
  Volume: local
  Network: bridge host ipvlan macvlan null overlay
  Log: awslogs fluentd gcplogs gelf journald json-file local logentries splunk syslog
 Swarm: active
  NodeID: 2r9nkedwnoqxv0smrvuuj2uoh
  Is Manager: true
  ClusterID: rt6qxlp5al5ftjkfbc8ix79qo
  Managers: 1
  Nodes: 3
  Default Address Pool: 10.0.0.0/8  
  SubnetSize: 24
  Data Path Port: 4789
  Orchestration:
   Task History Retention Limit: 5
  Raft:
   Snapshot Interval: 10000
   Number of Old Snapshots to Retain: 0
   Heartbeat Tick: 1
   Election Tick: 10
  Dispatcher:
   Heartbeat Period: 5 seconds
  CA Configuration:
   Expiry Duration: 3 months
   Force Rotate: 0
  Autolock Managers: false
  Root Rotation In Progress: false
  Node Address: 192.168.0.18
  Manager Addresses:
   192.168.0.18:2377
 Runtimes: io.containerd.runc.v2 runc
 Default Runtime: runc
 Init Binary: docker-init
 containerd version: 091922f03c2762540fd057fba91260237ff86acb
 runc version: v1.1.9-0-gccaecfc
 init version: de40ad0
 Security Options:
  apparmor
  seccomp
   Profile: builtin
 Kernel Version: 4.4.0-210-generic
 Operating System: Alpine Linux v3.18 (containerized)
 OSType: linux
 Architecture: x86_64
 CPUs: 8
 Total Memory: 31.42GiB
 Name: node1
 ID: ab60dc39-f44f-4d60-9ed5-275aa4c0c862
 Docker Root Dir: /var/lib/docker
 Debug Mode: true
  File Descriptors: 51
  Goroutines: 191
  System Time: 2024-01-11T00:34:16.000875645Z
  EventsListeners: 1
 Experimental: true
 Insecure Registries:
  127.0.0.1
  127.0.0.0/8
 Live Restore Enabled: false
 Product License: Community Engine

WARNING: API is accessible on http://0.0.0.0:2375 without encryption.
         Access to the remote API is equivalent to root access on the host. Refer
         to the 'Docker daemon attack surface' section in the documentation for
         more information: https://docs.docker.com/go/attack-surface/
WARNING: No swap limit support
WARNING: bridge-nf-call-iptables is disabled
WARNING: bridge-nf-call-ip6tables is disabled
```

### 138 Deixar o Swarm em um Node

![/imgs/swarm_138.png](/imgs/swarm_138.png)

```
[node1] (local) root@192.168.0.18 ~
$ docker node ls
ID                            HOSTNAME   STATUS    AVAILABILITY   MANAGER STATUS   ENGINE VERSION
2r9nkedwnoqxv0smrvuuj2uoh *   node1      Ready     Active         Leader           24.0.7
3xc5z9xaharluhc2hjt4ue13n     node2      Ready     Active                          24.0.7
vufqbwhqcsplsi5zvcnj6q2pt     node3      Ready     Active                          24.0.7
```

```
[node3] (local) root@192.168.0.16 ~
$ docker ps
CONTAINER ID   IMAGE          COMMAND                  CREATED          STATUS          PORTS     NAMES
4a74eb270414   nginx:latest   "/docker-entrypoint.…"   41 minutes ago   Up 41 minutes   80/tcp    nginxreplicas.3.ef79fss1tzdpa8rhddb06bzsq

[node3] (local) root@192.168.0.16 ~
$ docker swarm leave
Node left the swarm.

[node3] (local) root@192.168.0.16 ~
$ docker ps
CONTAINER ID   IMAGE     COMMAND   CREATED   STATUS    PORTS     NAMES
```

```
[node1] (local) root@192.168.0.18 ~
$ docker node ls
ID                            HOSTNAME   STATUS    AVAILABILITY   MANAGER STATUS   ENGINE VERSION
2r9nkedwnoqxv0smrvuuj2uoh *   node1      Ready     Active         Leader           24.0.7
3xc5z9xaharluhc2hjt4ue13n     node2      Ready     Active                          24.0.7
vufqbwhqcsplsi5zvcnj6q2pt     node3      Down      Active                          24.0.7
```

### 139 Removendo um Node

![/imgs/swarm_139.png](/imgs/swarm_139.png)

```
[node1] (local) root@192.168.0.18 ~
$ docker node ls
ID                            HOSTNAME   STATUS    AVAILABILITY   MANAGER STATUS   ENGINE VERSION
2r9nkedwnoqxv0smrvuuj2uoh *   node1      Ready     Active         Leader           24.0.7
3xc5z9xaharluhc2hjt4ue13n     node2      Ready     Active                          24.0.7
vufqbwhqcsplsi5zvcnj6q2pt     node3      Down      Active                          24.0.7

[node1] (local) root@192.168.0.18 ~
$ docker node rm vufqbwhqcsplsi5zvcnj6q2pt
vufqbwhqcsplsi5zvcnj6q2pt

[node1] (local) root@192.168.0.18 ~
$ docker node ls
ID                            HOSTNAME   STATUS    AVAILABILITY   MANAGER STATUS   ENGINE VERSION
2r9nkedwnoqxv0smrvuuj2uoh *   node1      Ready     Active         Leader           24.0.7
3xc5z9xaharluhc2hjt4ue13n     node2      Ready     Active                          24.0.7
```

- Resolvendo Bug!

```
[node3] (local) root@192.168.0.16 ~
$ docker swarm join --token SWMTKN-1-2drkgtxwk5abtdygnix0l8tk27z86lf65ciiutztowofvhe71j-6vqsbzd6nc1p8zqb9vcf2wmrz 192.168.0.18:2377
This node joined a swarm as a manager.

[node3] (local) root@192.168.0.16 ~
$ docker psCONTAINER ID   IMAGE     COMMAND   CREATED   STATUS    PORTS     NAMES

[node3] (local) root@192.168.0.16 ~
$ docker swarm leave -f
Node left the swarm.

[node2] (local) root@192.168.0.17 ~
$ docker swarm leave -f
Node left the swarm.

[node1] (local) root@192.168.0.18 ~
$ docker swarm leave -f
Node left the swarm.

[node1] (local) root@192.168.0.18 ~
$ docker swarm init --advertise-addr 192.168.0.18
Swarm initialized: current node (vvgg2b9jn31ku0mx32j83a7p5) is now a manager.

To add a worker to this swarm, run the following command:

    docker swarm join --token SWMTKN-1-2cgt2w0r2ew6bm25a9euadr6o0tg6jp3lbfyw9x97r7mmy5uck-daaljw12deqex39zsav29ea98 192.168.0.18:2377

To add a manager to this swarm, run 'docker swarm join-token manager' and follow the instructions.


[node1] (local) root@192.168.0.18 ~
$ docker node ls
ID                            HOSTNAME   STATUS    AVAILABILITY   MANAGER STATUS   ENGINE VERSION
vvgg2b9jn31ku0mx32j83a7p5 *   node1      Ready     Active         Leader           24.0.7
xb7woxbgavkpbkm27s71grgxb     node2      Ready     Active                          24.0.7
y60ybsk7zb98vna8b0owaezgt     node3      Ready     Active                          24.0.7


```

### 140 Inspecionando serviços

![/imgs/swarm_140.png](/imgs/swarm_140.png)

```
[node1] (local) root@192.168.0.18 ~
$ docker service ls
ID             NAME            MODE         REPLICAS   IMAGE          PORTS
q5ltce54gvpi   nginxreplicas   replicated   3/3        nginx:latest   *:80->80/tcp

[node1] (local) root@192.168.0.18 ~
$ docker service inspect q5ltce54gvpi
[
    {
        "ID": "q5ltce54gvpiov5qhjcbfltt6",
        "Version": {
            "Index": 23
        },
        "CreatedAt": "2024-01-11T00:53:51.344972883Z",
        "UpdatedAt": "2024-01-11T00:53:51.348366574Z",
        "Spec": {
            "Name": "nginxreplicas",
            "Labels": {},
            "TaskTemplate": {
                "ContainerSpec": {
                    "Image": "nginx:latest@sha256:2bdc49f2f8ae8d8dc50ed00f2ee56d00385c6f8bc8a8b320d0a294d9e3b49026",
                    "Init": false,
                    "StopGracePeriod": 10000000000,
                    "DNSConfig": {},
                    "Isolation": "default"
                },
                "Resources": {
                    "Limits": {},
                    "Reservations": {}
                },
                "RestartPolicy": {
                    "Condition": "any",
                    "Delay": 5000000000,
                    "MaxAttempts": 0
                },
                "Placement": {
                    "Platforms": [
                        {
                            "Architecture": "amd64",
                            "OS": "linux"
                        },
                        {
                            "Architecture": "unknown",
                            "OS": "unknown"
                        },
                        {
                            "OS": "linux"
                        },
                        {
                            "Architecture": "unknown",
                            "OS": "unknown"
                        },
                        {
                            "OS": "linux"
                        },
                        {
                            "Architecture": "unknown",
                            "OS": "unknown"
                        },
                        {
                            "Architecture": "arm64",
                            "OS": "linux"
                        },
                        {
                            "Architecture": "unknown",
                            "OS": "unknown"
                        },
                        {
                            "Architecture": "386",
                            "OS": "linux"
                        },
                        {
                            "Architecture": "unknown",
                            "OS": "unknown"
                        },
                        {
                            "Architecture": "mips64le",
                            "OS": "linux"
                        },
                        {
                            "Architecture": "unknown",
                            "OS": "unknown"
                        },
                        {
                            "Architecture": "ppc64le",
                            "OS": "linux"
                        },
                        {
                            "Architecture": "unknown",
                            "OS": "unknown"
                        },
                        {
                            "Architecture": "s390x",
                            "OS": "linux"
                        },
                        {
                            "Architecture": "unknown",
                            "OS": "unknown"
                        }
                    ]
                },
                "ForceUpdate": 0,
                "Runtime": "container"
            },
            "Mode": {
                "Replicated": {
                    "Replicas": 3
                }
            },
            "UpdateConfig": {
                "Parallelism": 1,
                "FailureAction": "pause",
                "Monitor": 5000000000,
                "MaxFailureRatio": 0,
                "Order": "stop-first"
            },
            "RollbackConfig": {
                "Parallelism": 1,
                "FailureAction": "pause",
                "Monitor": 5000000000,
                "MaxFailureRatio": 0,
                "Order": "stop-first"
            },
            "EndpointSpec": {
                "Mode": "vip",
                "Ports": [
                    {
                        "Protocol": "tcp",
                        "TargetPort": 80,
                        "PublishedPort": 80,
                        "PublishMode": "ingress"
                    }
                ]
            }
        },
        "Endpoint": {
            "Spec": {
                "Mode": "vip",
                "Ports": [
                    {
                        "Protocol": "tcp",
                        "TargetPort": 80,
                        "PublishedPort": 80,
                        "PublishMode": "ingress"
                    }
                ]
            },
            "Ports": [
                {
                    "Protocol": "tcp",
                    "TargetPort": 80,
                    "PublishedPort": 80,
                    "PublishMode": "ingress"
                }
            ],
            "VirtualIPs": [
                {
                    "NetworkID": "a6lc08ii7lesjjqqhbp682tel",
                    "Addr": "10.0.0.5/24"
                }
            ]
        }
    }
]
```

### 141 Verificar quais containers estão rodando

![/imgs/swarm_141.png](/imgs/swarm_141.png)

```
[node1] (local) root@192.168.0.18 ~
$ docker service ls
ID             NAME            MODE         REPLICAS   IMAGE          PORTS
q5ltce54gvpi   nginxreplicas   replicated   3/3        nginx:latest   *:80->80/tcp

[node1] (local) root@192.168.0.18 ~
$ docker service ps q5ltce54gvpi
ID             NAME              IMAGE          NODE      DESIRED STATE   CURRENT STATE           ERROR     PORTS
or0sizsiehkw   nginxreplicas.1   nginx:latest   node2     Running         Running 4 minutes ago             
o3q0q01l6zlb   nginxreplicas.2   nginx:latest   node3     Running         Running 4 minutes ago             
g6nraaawzrfl   nginxreplicas.3   nginx:latest   node1     Running         Running 4 minutes ago
```

### 142 Compose no Swarm

![/imgs/swarm_142.png](/imgs/swarm_142.png)

```
[node1] (local) root@192.168.0.18 ~
$ docker swarm init --advertise-addr 192.168.0.18
Swarm initialized: current node (iqzbp63o13hk20nckri0ir8lh) is now a manager.

To add a worker to this swarm, run the following command:

    docker swarm join --token SWMTKN-1-1dueip5y217m11n4vbg3efewd1hmb7fxte6meybd61jbp7e4xd-1al75y4owjqkg08xaeguzhtmx 192.168.0.18:2377

To add a manager to this swarm, run 'docker swarm join-token manager' and follow the instructions.

[node1] (local) root@192.168.0.18 ~
$ ls
docker-composer.yml

[node1] (local) root@192.168.0.18 ~
$ sudo docker stack deploy -c docker-composer.yml nginx-swarm
Creating network nginx-swarm_default
Creating service nginx-swarm_web

[node1] (local) root@192.168.0.18 ~
$ docker service ls
ID             NAME              MODE         REPLICAS   IMAGE          PORTS
io2sogduz4wh   nginx-swarm_web   replicated   1/1        nginx:latest   *:80->80/tcp
```

### 143 Escalando nossa aplicação

![/imgs/swarm_143.png](/imgs/swarm_143.png)

```
[node1] (local) root@192.168.0.18 ~
$ docker node ls
ID                            HOSTNAME   STATUS    AVAILABILITY   MANAGER STATUS   ENGINE VERSION
iqzbp63o13hk20nckri0ir8lh *   node1      Ready     Active         Leader           24.0.7
pbi825xo6v6a9q15w57ir2kcy     node2      Ready     Active                          24.0.7
twhybc3vzn1cpnpsxad0fd0x4     node3      Ready     Active                          24.0.7

[node1] (local) root@192.168.0.18 ~
$ docker service ls
ID             NAME              MODE         REPLICAS   IMAGE          PORTS
io2sogduz4wh   nginx-swarm_web   replicated   1/1        nginx:latest   *:80->80/tcp

[node1] (local) root@192.168.0.18 ~
$ docker ps
CONTAINER ID   IMAGE          COMMAND                  CREATED         STATUS         PORTS     NAMES
e62c9a3a8259   nginx:latest   "/docker-entrypoint.…"   2 minutes ago   Up 2 minutes   80/tcp    nginx-swarm_web.1.1f6abkhldrif3jagbzy45zvw2

[node1] (local) root@192.168.0.18 ~
$ docker service scale nginx-swarm_web=3
nginx-swarm_web scaled to 3
overall progress: 3 out of 3 tasks 
1/3: running   [==================================================>] 
2/3: running   [==================================================>] 
3/3: running   [==================================================>] 
verify: Service converged 

[node1] (local) root@192.168.0.18 ~
$ docker node ls
ID                            HOSTNAME   STATUS    AVAILABILITY   MANAGER STATUS   ENGINE VERSION
iqzbp63o13hk20nckri0ir8lh *   node1      Ready     Active         Leader           24.0.7
pbi825xo6v6a9q15w57ir2kcy     node2      Ready     Active                          24.0.7
twhybc3vzn1cpnpsxad0fd0x4     node3      Ready     Active                          24.0.7

[node1] (local) root@192.168.0.18 ~
$ docker service ls
ID             NAME              MODE         REPLICAS   IMAGE          PORTS
io2sogduz4wh   nginx-swarm_web   replicated   3/3        nginx:latest   *:80->80/tcp
```

### 144 Parar de receber Tasks em um Node

![/imgs/swarm_144.png](/imgs/swarm_144.png)

```
[node1] (local) root@192.168.0.18 ~
$ docker node ls
ID                            HOSTNAME   STATUS    AVAILABILITY   MANAGER STATUS   ENGINE VERSION
iqzbp63o13hk20nckri0ir8lh *   node1      Ready     Active         Leader           24.0.7
pbi825xo6v6a9q15w57ir2kcy     node2      Ready     Active                          24.0.7
twhybc3vzn1cpnpsxad0fd0x4     node3      Ready     Active                          24.0.7

[node1] (local) root@192.168.0.18 ~
$ docker node update --availability drain twhybc3vzn1cpnpsxad0fd0x4
twhybc3vzn1cpnpsxad0fd0x4

[node1] (local) root@192.168.0.18 ~
$ docker node ls
ID                            HOSTNAME   STATUS    AVAILABILITY   MANAGER STATUS   ENGINE VERSION
iqzbp63o13hk20nckri0ir8lh *   node1      Ready     Active         Leader           24.0.7
pbi825xo6v6a9q15w57ir2kcy     node2      Ready     Active                          24.0.7
twhybc3vzn1cpnpsxad0fd0x4     node3      Ready     Drain                           24.0.7

```

### 145 Atualizando uma imagem no Swarm

![/imgs/swarm_145.png](/imgs/swarm_145.png)

```
[node1] (local) root@192.168.0.18 ~
$ docker node ls
ID                            HOSTNAME   STATUS    AVAILABILITY   MANAGER STATUS   ENGINE VERSION
iqzbp63o13hk20nckri0ir8lh *   node1      Ready     Active         Leader           24.0.7
pbi825xo6v6a9q15w57ir2kcy     node2      Ready     Active                          24.0.7
twhybc3vzn1cpnpsxad0fd0x4     node3      Ready     Drain                           24.0.7


[node1] (local) root@192.168.0.18 ~
$ docker service ls
ID             NAME              MODE         REPLICAS   IMAGE          PORTS
io2sogduz4wh   nginx-swarm_web   replicated   3/3        nginx:latest   *:80->80/tcp


[node1] (local) root@192.168.0.18 ~
$ docker service update --image nginx:1.18.0 io2sogduz4wh
io2sogduz4wh
overall progress: 3 out of 3 tasks 
1/3: running   [==================================================>] 
2/3: running   [==================================================>] 
3/3: running   [==================================================>] 
verify: Service converged 


[node1] (local) root@192.168.0.18 ~
$ docker node ps
ID             NAME                    IMAGE          NODE      DESIRED STATE   CURRENT STATE             ERROR     PORTS
zj8l60plx624   nginx-swarm_web.1       nginx:1.18.0   node1     Running         Running 52 seconds ago              
1f6abkhldrif    \_ nginx-swarm_web.1   nginx:latest   node1     Shutdown        Shutdown 55 seconds ago             
znx7c0zumhyq   nginx-swarm_web.3       nginx:1.18.0   node1     Running         Running 47 seconds ago   
```

```
[node2] (local) root@192.168.0.17 ~
$ docker ps
CONTAINER ID   IMAGE          COMMAND                  CREATED              STATUS              PORTS     NAMES
1483e9bbc079   nginx:latest   "/docker-entrypoint.…"   About a minute ago   Up About a minute   80/tcp    nginx-swarm_web.2.yxikapx90t9az40qf6i1rhftx
5f8a399e1d6d   nginx:latest   "/docker-entrypoint.…"   5 minutes ago        Up 5 minutes        80/tcp    nginx-swarm_web.3.jzvp1sdb6fsypxf8oes8ctn4b

[node2] (local) root@192.168.0.17 ~
$ docker ps
CONTAINER ID   IMAGE          COMMAND                  CREATED         STATUS         PORTS     NAMES
ee1c32245238   nginx:1.18.0   "/docker-entrypoint.…"   3 minutes ago   Up 3 minutes   80/tcp    nginx-swarm_web.2.nezojirqvh0t31evzvu5ktjob
```

```
[node1] (local) root@192.168.0.18 ~
$ docker node ls
ID                            HOSTNAME   STATUS    AVAILABILITY   MANAGER STATUS   ENGINE VERSION
iqzbp63o13hk20nckri0ir8lh *   node1      Ready     Active         Leader           24.0.7
pbi825xo6v6a9q15w57ir2kcy     node2      Ready     Active                          24.0.7
twhybc3vzn1cpnpsxad0fd0x4     node3      Ready     Drain                           24.0.7

[node1] (local) root@192.168.0.18 ~
$ docker node update --availability active twhybc3vzn1cpnpsxad0fd0x4
twhybc3vzn1cpnpsxad0fd0x4

[node1] (local) root@192.168.0.18 ~
$ docker node ls
ID                            HOSTNAME   STATUS    AVAILABILITY   MANAGER STATUS   ENGINE VERSION
iqzbp63o13hk20nckri0ir8lh *   node1      Ready     Active         Leader           24.0.7
pbi825xo6v6a9q15w57ir2kcy     node2      Ready     Active                          24.0.7
twhybc3vzn1cpnpsxad0fd0x4     node3      Ready     Active                          24.0.7

[node1] (local) root@192.168.0.18 ~
$ docker service ls
ID             NAME              MODE         REPLICAS   IMAGE          PORTS
io2sogduz4wh   nginx-swarm_web   replicated   3/3        nginx:1.18.0   *:80->80/tcp


[node1] (local) root@192.168.0.18 ~
$ docker service update --image nginx:latest io2sogduz4wh
io2sogduz4wh
overall progress: 3 out of 3 tasks 
1/3: running   [==================================================>] 
2/3: running   [==================================================>] 
3/3: running   [==================================================>] 
verify: Service converged 


[node1] (local) root@192.168.0.18 ~
$ docker ps
CONTAINER ID   IMAGE          COMMAND                  CREATED          STATUS          PORTS     NAMES
ab15f4ad35d2   nginx:latest   "/docker-entrypoint.…"   17 seconds ago   Up 10 seconds   80/tcp    nginx-swarm_web.1.l6at3agwikwgxs125ilo39axw
```

### 146 Criando redes para serviços do Swarm

![/imgs/swarm_146.png](/imgs/swarm_146.png)

```
[node1] (local) root@192.168.0.18 ~
$ docker service ls
ID             NAME              MODE         REPLICAS   IMAGE          PORTS
io2sogduz4wh   nginx-swarm_web   replicated   3/3        nginx:latest   *:80->80/tcp


[node1] (local) root@192.168.0.18 ~
$ docker service rm io2sogduz4wh
io2sogduz4wh


[node1] (local) root@192.168.0.18 ~
$ docker service ls
ID        NAME      MODE      REPLICAS   IMAGE     PORTS
```

```
[node1] (local) root@192.168.0.18 ~
$ docker network create --driver overlay swarm
qoidqpijxggurgt68uu93u9gf

[node1] (local) root@192.168.0.18 ~
$ docker network ls
NETWORK ID     NAME                  DRIVER    SCOPE
387dc5c5594e   bridge                bridge    local
87cb11cc52a7   docker_gwbridge       bridge    local
257f5d9ab7e9   host                  host      local
zflzq2wgghb6   ingress               overlay   swarm
pjtjf2lfk694   nginx-swarm_default   overlay   swarm
cba92a8d6d5f   none                  null      local
qoidqpijxggu   swarm                 overlay   swarm
```

```
[node1] (local) root@192.168.0.18 ~
$ docker service create --name nginxreplicas --replicas 3 -p 80:80 --network swarm nginx
u9r7xkojjfj3mgcv2x50rm3g5
overall progress: 3 out of 3 tasks 
1/3: running   [==================================================>] 
2/3: running   [==================================================>] 
3/3: running   [==================================================>] 
verify: Service converged 


[node1] (local) root@192.168.0.18 ~
$ docker service ls
ID             NAME            MODE         REPLICAS   IMAGE          PORTS
u9r7xkojjfj3   nginxreplicas   replicated   3/3        nginx:latest   *:80->80/tcp
```

```
[node1] (local) root@192.168.0.18 ~
$ docker container ls
CONTAINER ID   IMAGE          COMMAND                  CREATED          STATUS          PORTS     NAMES
eaf45585b681   nginx:latest   "/docker-entrypoint.…"   54 seconds ago   Up 51 seconds   80/tcp    nginxreplicas.3.8sbi70jy5nw0ih6au5joy8soe
[node1] (local) root@192.168.0.18 ~
$ docker container inspect eaf45585b681
[
      },
        "NetworkSettings": {
            "Bridge": "",
            "SandboxID": "5470a8806fb12e2f24cc5431203d4e9a5c71b77c11dc6b078b678c8a119da220",
            "HairpinMode": false,
            "LinkLocalIPv6Address": "",
            "LinkLocalIPv6PrefixLen": 0,
            "Ports": {
                "80/tcp": null
            },
            "SandboxKey": "/var/run/docker/netns/5470a8806fb1",
            "SecondaryIPAddresses": null,
            "SecondaryIPv6Addresses": null,
            "EndpointID": "",
            "Gateway": "",
            "GlobalIPv6Address": "",
            "GlobalIPv6PrefixLen": 0,
            "IPAddress": "",
            "IPPrefixLen": 0,
            "IPv6Gateway": "",
            "MacAddress": "",
            "Networks": {
                "ingress": {
                    "IPAMConfig": {
                        "IPv4Address": "10.0.0.19"
                    },
                    "Links": null,
                    "Aliases": [
                        "eaf45585b681"
                    ],
                    "NetworkID": "zflzq2wgghb6cpadart4mx6jr",
                    "EndpointID": "1d51914f06eed8fcd459dcfe5d64c9aab716b5bce879209ed4910e62a2bca849",
                    "Gateway": "",
                    "IPAddress": "10.0.0.19",
                    "IPPrefixLen": 24,
                    "IPv6Gateway": "",
                    "GlobalIPv6Address": "",
                    "GlobalIPv6PrefixLen": 0,
                    "MacAddress": "02:42:0a:00:00:13",
                    "DriverOpts": null
                },
                "swarm": {
                    "IPAMConfig": {
                        "IPv4Address": "10.0.2.5"
                    },
                    "Links": null,
                    "Aliases": [
                        "eaf45585b681"
                    ],
                    "NetworkID": "qoidqpijxggurgt68uu93u9gf",
                    "EndpointID": "12c7f5b9ec1f1361f0c22d55d7f488ad69bd265b30a01687b13f7920a107bea8",
                    "Gateway": "",
                    "IPAddress": "10.0.2.5",
                    "IPPrefixLen": 24,
                    "IPv6Gateway": "",
                    "GlobalIPv6Address": "",
                    "GlobalIPv6PrefixLen": 0,
                    "MacAddress": "02:42:0a:00:02:05",
                    "DriverOpts": null
                }
            }
```

### 147 Conectando serviço a uma rede já existente

![/imgs/swarm_147.png](/imgs/swarm_147.png)

```
[node1] (local) root@192.168.0.18 ~
$ docker service ls
ID             NAME            MODE         REPLICAS   IMAGE          PORTS
u9r7xkojjfj3   nginxreplicas   replicated   3/3        nginx:latest   *:80->80/tcp

[node1] (local) root@192.168.0.18 ~
$ docker service rm u9r7xkojjfj3
u9r7xkojjfj3

[node1] (local) root@192.168.0.18 ~
$ docker service ls
ID        NAME      MODE      REPLICAS   IMAGE     PORTS


[node1] (local) root@192.168.0.18 ~
$ docker network ls
NETWORK ID     NAME                  DRIVER    SCOPE
387dc5c5594e   bridge                bridge    local
87cb11cc52a7   docker_gwbridge       bridge    local
257f5d9ab7e9   host                  host      local
zflzq2wgghb6   ingress               overlay   swarm
pjtjf2lfk694   nginx-swarm_default   overlay   swarm
cba92a8d6d5f   none                  null      local
qoidqpijxggu   swarm                 overlay   swarm

[node1] (local) root@192.168.0.18 ~
$ docker service create --name nginxreplicas --replicas 3 -p 80:80 nginx
jrgl28fpg69o7po401vlxwc3m
overall progress: 3 out of 3 tasks 
1/3: running   [==================================================>] 
2/3: running   [==================================================>] 
3/3: running   [==================================================>] 
verify: Service converged 
```

```
$ docker container ls
CONTAINER ID   IMAGE          COMMAND                  CREATED          STATUS          PORTS     NAMES
5d63e563dce4   nginx:latest   "/docker-entrypoint.…"   42 seconds ago   Up 40 seconds   80/tcp    nginxreplicas.2.4qizvhqv9m59lb9rgagu02iz1

[node1] (local) root@192.168.0.18 ~
$ docker container inspect 5d63
[
 "Networks": {
                "ingress": {
                    "IPAMConfig": {
                        "IPv4Address": "10.0.0.22"
                    },
                    "Links": null,
                    "Aliases": [
                        "5d63e563dce4"
                    ],
                    "NetworkID": "zflzq2wgghb6cpadart4mx6jr",
                    "EndpointID": "c975222038764a49da4b2baf787fb170d4603a380bdcec9c29dad2f23836ab70",
                    "Gateway": "",
                    "IPAddress": "10.0.0.22",
                    "IPPrefixLen": 24,
                    "IPv6Gateway": "",
                    "GlobalIPv6Address": "",
                    "GlobalIPv6PrefixLen": 0,
                    "MacAddress": "02:42:0a:00:00:16",
                    "DriverOpts": null
                }
            }
```

```
[node1] (local) root@192.168.0.18 ~
$ docker service ls
ID             NAME            MODE         REPLICAS   IMAGE          PORTS
jrgl28fpg69o   nginxreplicas   replicated   3/3        nginx:latest   *:80->80/tcp


[node1] (local) root@192.168.0.18 ~
$ docker service update --network-add swarm jrgl28fpg69o
jrgl28fpg69o
overall progress: 3 out of 3 tasks 
1/3: running   [==================================================>] 
2/3: running   [==================================================>] 
3/3: running   [==================================================>] 
verify: Service converged 


[node1] (local) root@192.168.0.18 ~
$ docker service update --network-add swarm jrgl28fpg69o
service is already attached to network swarm
```

### 148 Conclusão da seção

[Voltar ao Índice](#indice)

---


## <a name="parte9">9 - Seção 9: Orquestração com Kubernetes</a>

### 149 Introdução da seção
### 150 O que é Kubernetes?

![/imgs/kubernetes_150.png](/imgs/kubernetes_150.png)

### 151 Conceitos fundamentais

![/imgs/kubernetes_151.png](/imgs/kubernetes_151.png)

### 152 Dependências necessárias

![/imgs/kubernetes_152.png](/imgs/kubernetes_152.png)

### 153 Instalação Kubernetes no Windows

![/imgs/kubernetes_153.png](/imgs/kubernetes_153.png)

### 154 Instalação Kubernetes no Linux

![/imgs/kubernetes_154.png](/imgs/kubernetes_154.png)

```
$ kubectl version
Client Version: v1.28.2
Kustomize Version: v5.0.4-0.20230601165947-6ce0bf390ce3
Server Version: v1.28.2

$ curl -LO https://storage.googleapis.com/minikube/releases/latest/minikube_latest_amd64.deb
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
                                 Dload  Upload   Total   Spent    Left  Speed
100 28.9M  100 28.9M    0     0  13.2M      0  0:00:02  0:00:02 --:--:-- 13.3M

$ sudo dpkg -i minikube_latest_amd64.deb
[sudo] password for josemalcher:
Selecting previously unselected package minikube.
(Reading database ... 25682 files and directories currently installed.)
Preparing to unpack minikube_latest_amd64.deb ...
Unpacking minikube (1.32.0-0) ...
Setting up minikube (1.32.0-0) ...


```

### 155 Inicializando o Minikube

![/imgs/kubernetes_155.png](/imgs/kubernetes_155.png)


```
$ minikube start
😄  minikube v1.32.0 on Ubuntu 22.04 (amd64)
✨  Automatically selected the docker driver. Other choices: none, ssh
📌  Using Docker driver with root privileges
❗  For an improved experience it's recommended to use Docker Engine instead of Docker Desktop.
Docker Engine installation instructions: https://docs.docker.com/engine/install/#server
👍  Starting control plane node minikube in cluster minikube
🚜  Pulling base image ...
💾  Downloading Kubernetes v1.28.3 preload ...
    > preloaded-images-k8s-v18-v1...:  403.35 MiB / 403.35 MiB  100.00% 24.13 M
    > gcr.io/k8s-minikube/kicbase...:  453.90 MiB / 453.90 MiB  100.00% 17.71 M
🔥  Creating docker container (CPUs=2, Memory=2200MB) ...
🐳  Preparing Kubernetes v1.28.3 on Docker 24.0.7 ...
    ▪ Generating certificates and keys ...
    ▪ Booting up control plane ...
    ▪ Configuring RBAC rules ...
🔗  Configuring bridge CNI (Container Networking Interface) ...
🔎  Verifying Kubernetes components...
    ▪ Using image gcr.io/k8s-minikube/storage-provisioner:v5
🌟  Enabled addons: storage-provisioner, default-storageclass
🏄  Done! kubectl is now configured to use "minikube" cluster and "default" namespace by default

```

```
$ minikube status
minikube
type: Control Plane
host: Running
kubelet: Running
apiserver: Running
kubeconfig: Configured

```

### 156 Parando o Minikube

![/imgs/kubernetes_156.png](/imgs/kubernetes_156.png)

```
$ minikube stop  
✋  Stopping node "minikube"  ...
🛑  Powering off "minikube" via SSH ...
🛑  1 node stopped.

```

### 157 Acessando a Dashboard

![/imgs/kubernetes_157.png](/imgs/kubernetes_157.png)

```
$ minikube dashboard      
🤔  Verifying dashboard health ...
🚀  Launching proxy ...
🤔  Verifying proxy health ...
🎉  Opening http://127.0.0.1:40291/api/v1/namespaces/kubernetes-dashboard/services/http:kubernetes-dashboard:/proxy/ in your default browser...
👉  http://127.0.0.1:40291/api/v1/namespaces/kubernetes-dashboard/services/http:kubernetes-dashboard:/proxy/

```

### 158 Deployment na teoria

![/imgs/kubernetes_158.png](/imgs/kubernetes_158.png)

### 159 Criando nosso projeto

![/imgs/kubernetes_159.png](/imgs/kubernetes_159.png)



### 160 Criando o Deployment
### 161 Verificando deployments
### 162 Checando pods
### 163 Configurações do Kubernetes
### 164 Services na teoria
### 165 Criando um Service
### 166 Gerando um IP para o Service
### 167 Detalhes dos services
### 168 Escalando aplicação
### 169 Verificando número de réplicas
### 170 Diminuir número de réplicas
### 171 Atualizando a imagem do projeto
### 172 Desfazer alteração de projeto
### 173 Deletando Services
### 174 Deletando Deployments
### 175 Modo declarativo teoria
### 176 Chaves mais utilizadas do modo declarativo
### 177 Criando nosso arquivo
### 178 Rodando o arquivo do projeto
### 179 Parando o deployment
### 180 Criando o arquivo de service
### 181 Iniciando o service
### 182 Parando o serviço
### 183 Atualizando o projeto
### 184 Unindo arquivos
### 185 Conclusão da seção

[Voltar ao Índice](#indice)

---


## <a name="parte10">10 - Seção 10: ** EXTRA **: Comandos básicos de terminal</a>



[Voltar ao Índice](#indice)

---


## <a name="parte11">11 - Seção 11: Conclusão e próximos passos</a>



[Voltar ao Índice](#indice)

---