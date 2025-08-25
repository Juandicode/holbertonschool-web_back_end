#!/usr/bin/env python3
"""
Lists all documents in a MongoDB collection.
"""


def schools_by_topic(mongo_collection, topic):
    """MongoDB"""
    schools = mongo_collection.find({'topics': topic})
    return list(schools)