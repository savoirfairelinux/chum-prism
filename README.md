<p align="center">
  <a href="https://www.ymhtech.com/welcome">
    <img alt="Ymhtech" src="https://images.squarespace-cdn.com/content/571100a907eaa0fcd25125df/1539724253168-JOKRNONBEQFIRSTQMC5A/YMH+logo.png" width="60" />
  </a>
</p>
<h1 align="center">
  Chum Prism
</h1>

Help is more accessible than you think

This project is using Gatsby framework


# Project branchs

The main branchs are aom and subdomain_aom 

aom is the branch that holds the code for the main website https://prismref.ca/

subdomain_aom is the branch that holds the code for the subdomain website to https://aom.prismref.ca/


Since february the 9 th subdomain_aom became the main branch.

# Deployment

Deployment is handled by a github action file `.github/workflows/build-deploy-subdomain_aom.yml`

Deployment is done by sending file trough SFTP on WHC.ca hosting (in Canada).

SFTP credentials are stored in Github Secrets.

Please refer to the following contacts to get access to the hosting in order to update the Secrets:

"Shalini Lal" <shalini.lal@umontreal.ca>;
"Orlando Enrique Lopez Sumalavia, CHUM" <orlando.enrique.lopez.sumalavia.chum@ssss.gouv.qc.ca>; 
