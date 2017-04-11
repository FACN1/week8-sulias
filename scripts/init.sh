# openssl genrsa -out key.pem 2048
# openssl req -new -key key.pem -out csr.pem -subj "/C=US/ST=Denial/L=Springfield/O=Dis/CN=localhost"
# openssl x509 -req -days 9999 -in csr.pem -signkey key.pem -out cert.pem
# rm csr.pem
# mkdir keys
# mv cert.pem keys/cert.pem
# mv key.pem keys/key.pem
#

echo 'Enter DATABASE_URL and press [ENTER]'
read database_url

echo 'Enter client_id and press [ENTER]'
read client_id

echo 'Enter client_secret and press [ENTER]'
read client_secret

echo 'Enter secret and press [ENTER]'
read secret


echo "DATABASE_URL=$database_url
CLIENT_ID=$client_id
CLIENT_SECRET=$client_secret
SECRET=$secret" > config.env
