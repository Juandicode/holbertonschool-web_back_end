#!/usr/bin/env python3
"""
Main file
"""

from typing import Tuple


def index_range(page: int, page_size: int) -> Tuple[int, int]:
    """returns a tuple containing the start and end index for pagination and
    calculate the start and end index."""
    index1 = (page - 1) * page_size
    index2 = page * page_size
    return index1, index2
