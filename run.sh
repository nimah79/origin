#!/bin/sh

rush update --purge
rush link
rush build
rush run:origin
