"""
Plugin for reflected XSS findings
"""
from owtf.managers.resource import get_resources
from owtf.plugin.helper import plugin_helper

DESCRIPTION = "Plugin to assist passive testing for known XSS vectors"


def run(PluginInfo):
    resource = get_resources("PassiveCrossSiteScripting")
    Content = plugin_helper.resource_linklist("Online Resources", resource)
    return Content
