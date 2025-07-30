#!/usr/bin/env python3
from typing import List, Union
"""Module that defines a function to sum a mixed list of integers and floats."""
def sum_mixed_list(mxd_lst: List[Union[int, float]]) -> float:
    """Return the sum of a mixed list of integers and floats."""
    return sum(mxd_lst)
