#!/usr/bin/env python3
"""
Lists all documents in a MongoDB collection.
"""


def insert_school(mongo_collection, **kwargs):
    """
    Lists all documents in a MongoDB collection.
    """
    return mongo_collection.insert_one(kwargs).inserted_id