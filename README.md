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

```


### 52 Verificando processamento do container
### 53 Inspecionando container
### 54 Verificando processamento do Docker
### 55 Autenticação no terminal
### 56 Encerrando autenticação
### 57 Enviando imagens para o Hub
### 58 Atualizando imagens no Hub
### 59 Utilizando nossa imagem
### 60 Conclusão da seção

[Voltar ao Índice](#indice)

---


## <a name="parte4">4 - Seção 4: Introduzindo volumes aos nossos containers</a>



[Voltar ao Índice](#indice)

---


## <a name="parte5">5 - Seção 5: Conectando containers com Networks</a>



[Voltar ao Índice](#indice)

---


## <a name="parte6">6 - Seção 6: Introdução ao YAML</a>



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