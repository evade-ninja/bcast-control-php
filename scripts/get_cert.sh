#!/usr/bin/env bash

source ./get_cert_vars.sh

if ! openssl x509 -in "$cert_path/$domain.crt" -noout -checkend "$threshold_seconds"; then
  echo "Certificate file expires within 30 days (or is expired): $cert_path. LETS RENEW!"
  wget -N $cert_www/$cert_name -P /tmp/

  if [[ -d "$cert_path/$domain.crt" ]]; then
  echo "New cert available"
  mv -f /tmp/$cert_name $local_cert_path/
  
  #set permissions on certificate
  chmod 640 $local_cert_path/$cert_name

  #reload apache
  systemctl reload apache2
  
  #remove temp file
  rm /tmp/$cert_name

  fi
fi

