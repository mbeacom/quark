# Setup file for package map

from setuptools import setup

setup(name="map",
      version="0.0.1",
      install_requires=["quark==0.0.1"],
      py_modules=['map'],
      packages=['map', 'map_md'])
