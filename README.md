# Personal Portfolio Website  

## Please visit https://dannysickels.com/ to see this website live!

---

## Overview  

This was truly my first **Big Project**, and was a lot of fun putting together. It helped that I had people for support when developing this, which led to me easily initializing my first Next.js project. This portfolio also pulls information off my user profile to populate important projects via GitHub API.

## Features
- **Responsive Design:** Optimized for various screen sizes, ensuring a seamless experience on desktops, tablets, and mobile devices.  
- **Project Showcase:** Highlights key projects with descriptions, technologies used, and links to live demos or repositories.  
- **Contact Form:** Allow visitors, _like yourself!_, to get in touch with me directly through the website.  
### _Frontend_:
- **Next.js**
- **React-based Components**
- **Typescript**
- **Tailwind CSS**
### _Backend_:
- **Node.js**
- **Mailgun Email API**
### Containerization / Deployment:
- **Docker**
- **Kubernetes / (Hosting privately on physical server)**

---
  
## Getting Started  

To set up and run this project locally, follow the steps below.

### Prerequisites
Ensure you have the following installed on your system:

Node.js  
Docker  
Kubernetes    

### Clone the Repository:  

```
git clone https://github.com/danielsickels/portfolio-website.git
cd portfolio-website
```
Install necessary dependencies.  

To run the application locally, execute the following script:
```npm run dev```
After running the script, open your browser and navigate to http://localhost:3000 to view the website.

---

### Deployment
This project includes configurations for containerization and deployment using Docker and Kubernetes.
You can use the following script, ```bash run.sh``` to build the docker image. Or alternatively, you can use standard commands:  
```
docker build -t portfolio-website .
docker run -p 3000:3000 portfolio-website
```

Ensure you have the necessary permissions and context set for your Kubernetes cluster before deploying.
```kubectl apply -f k8s/```
