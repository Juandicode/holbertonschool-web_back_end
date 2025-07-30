#!/usr/bin/env python3

"""Module that defilist of integers and floats."""

from typing import List, Union


def sum_mixed_list(mxd_lst: List[Union[int, float]]) -> float:
    """Return the sum of a and floats."""
    return sum(mxd_lst)
