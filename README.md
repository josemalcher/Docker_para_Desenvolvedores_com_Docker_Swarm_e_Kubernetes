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