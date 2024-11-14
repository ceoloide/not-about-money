FROM ghcr.io/inti-cmnb/kicad8_auto:latest
LABEL Author="Marco Massarelli <marco.massarelli@gmail.com>"
LABEL Description="Ergogen, Freerouting (2.0.1), and KiCad 8 with KiBot and other automation scripts"

RUN     apt-get update  && \
	apt -y install --no-install-recommends nodejs npm xvfb wget && \
	npm install -g https://github.com/ergogen/ergogen#develop && \
  wget https://download.oracle.com/java/21/latest/jdk-21_linux-x64_bin.deb && \
  dpkg -i jdk-21_linux-x64_bin.deb && \
	wget https://github.com/freerouting/freerouting/releases/download/v2.0.1/freerouting-2.0.1.jar && \
	mv freerouting-2.0.1.jar /opt/freerouting.jar && \
	apt-get -y autoremove && \
	rm -rf /var/lib/apt/lists/* /var/cache/debconf/templates.dat-old /var/lib/dpkg/status-old
