"""Deployment script for my website."""

from ftplib import FTP, error_perm
import os.path
import os
import getpass
import json
# from pprint import pprint
import argparse


# input arguments
parser = argparse.ArgumentParser()
parser.add_argument("-f",
                    "--full-deployment",
                    help="full deployment will be triggered",
                    action="store_true",
                    dest="fulldeployment")
global args
args = parser.parse_args()


def get_pass():
    """Read the password from stdin."""
    print("Password not configured...")
    password = getpass.getpass('pw:')
    return password


def ftp_login():
    """Use config file to do ftplogin."""
    with open('deployment-config.json') as data_file:
        data = json.load(data_file)
        # pprint(data)

    global ftp
    ftp = FTP(data["ftp-url"])
    username = data["ftp-user"]
    global remoteRootFolder
    remoteRootFolder = data["ftp-default-folder"]

    try:
        password = data["ftp-password"]
        if not password:
            password = get_pass()

    except (KeyError):
            password = get_pass()

    ftp.login(username, password)
    ftp.pwd()
    ftp.cwd(remoteRootFolder)


def ftp_close():
    """Close the ftp connection."""
    ftp.close()


def try_mk_folder(name):
    """Try to create a new folder using FTP."""
    print("MKD", name)

    try:
        ftp.mkd(name)

    # ignore "directory already exists"
    except error_perm as e:
        if not e.args[0].startswith('550'):
            raise


def deploy_files(path, remoteCwd=''):
    """Deploy the files."""
    if remoteCwd:
        if remoteRootFolder:
            print("going back to ", remoteRootFolder)
            ftp.cwd(remoteRootFolder)
        try_mk_folder(remoteCwd)
        print("CWD ", remoteCwd)
        ftp.cwd(remoteCwd)

    for name in os.listdir(path):
            localpath = os.path.join(path, name)
            if os.path.isfile(localpath):
                print("STOR", name, localpath)
                ftp.storbinary('STOR ' + name, open(localpath, 'rb'))
            elif os.path.isdir(localpath):

                try_mk_folder(name)
                print("CWD", name)
                ftp.cwd(name)
                deploy_files(localpath)
                print("CWD", "..")
                ftp.cwd("..")


print("### FTP WEBSITE DEPLOYMENT")
ftp_login()
local_release_folder = 'release/src/'
# component release
selected_components = ['components/home/']
# full release
if args.fulldeployment:
    # full-deployment:
    selected_components = ['']

if not selected_components:
    # full release
    print("### deploying the whole app")
    deploy_files(local_release_folder)

else:
    for sc in selected_components:
        print("### deploying " + sc)
        deploy_files(local_release_folder + sc, sc)
ftp_close()
